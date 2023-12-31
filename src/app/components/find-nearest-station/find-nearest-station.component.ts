import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStationLookupResult } from '../station-lookup/i-station-lookup-result';
import { HuxleyService } from 'src/app/services/huxley/huxley.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { MessageService } from 'src/app/services/message/message.service';
import { noStationFound } from './find-nearest-station.data';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

declare var google: any;

@Component({
  selector: 'app-find-nearest-station',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],
  templateUrl: './find-nearest-station.component.html',
  styleUrls: ['./find-nearest-station.component.scss'],
})
export class FindNearestStationComponent implements OnInit {
  @Input() findNearestStationOnLoad: boolean = false;

  @Output() nearestStation: EventEmitter<IStationLookupResult> =
    new EventEmitter();

  public loading: boolean = false;
  public error: boolean = false;

  constructor(
    private huxley: HuxleyService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    navigator.permissions
      .query({ name: 'geolocation' })
      .then((result: PermissionStatus) => {
        if (result.state === 'denied') {
          this.error = true;
        }
      });
    if (this.findNearestStationOnLoad) this.findNearestStation();
  }

  findNearestStation(): void {
    this.loading = true;

    const savedNearestStation: string | null =
      this.localStorageService.get('nearest-station');

    if (savedNearestStation) {
      this.nearestStation.emit(
        JSON.parse(savedNearestStation) as IStationLookupResult
      );
      this.loading = false;
    }

    navigator.geolocation.getCurrentPosition(
      (location: GeolocationPosition) => {
        this.error = false;
        const map = new google.maps.Map(document.createElement('div'));
        const request = {
          location: new google.maps.LatLng(
            location.coords.latitude,
            location.coords.longitude
          ),
          radius: 5000,
          types: ['train_station'],
        };

        new google.maps.places.PlacesService(map).nearbySearch(
          request,
          (results: any, status: any) => {
            if (!results.length) {
              this.messageService.send({
                stream: 'notification',
                sender: this.constructor.name,
                payload: noStationFound,
              });
              this.loading = false;
              return;
            }
            this.huxley
              .getStationByName(results[0].name.toLowerCase())
              .subscribe({
                next: (response: IStationLookupResult[]) => {
                  this.nearestStation.emit(response[0]);
                  this.localStorageService.save(
                    'nearest-station',
                    JSON.stringify(response[0])
                  );
                  this.loading = false;
                },
              });
          }
        );
      },
      () => {
        this.loading = false;
        this.error = true;
      }
    );
  }
}
