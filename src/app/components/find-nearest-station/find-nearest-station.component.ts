import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStationLookupResult } from '../station-lookup/i-station-lookup-result';
import { HuxleyService } from 'src/app/services/huxley/huxley.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { MessageService } from 'src/app/services/message/message.service';
import { noStationFound } from './find-nearest-station.data';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

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
    private localStorageService: LocalStorageService,
    private http: HttpClient
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
        this.http
          .get('https://national-rail-departures-be.web.app/google-maps', {
            params: {
              key: environment.googleMapsApiKey,
              location: `${location.coords.latitude},${location.coords.longitude}`,
            },
          })
          .subscribe({
            next: (response: any) => {
              if (!response.results.length)
                this.messageService.send({
                  stream: 'notification',
                  sender: this.constructor.name,
                  payload: noStationFound,
                });
              this.huxley.getStationByName(response.results[0].name).subscribe({
                next: (response: IStationLookupResult[]) => {
                  this.nearestStation.emit(response[0]);
                  this.localStorageService.save(
                    'nearest-station',
                    JSON.stringify(response[0])
                  );
                  this.loading = false;
                },
              });
            },
          });
      },
      () => {
        this.loading = false;
        this.error = true;
      }
    );
  }
}
