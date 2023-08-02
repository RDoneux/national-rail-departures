import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HuxleyService } from 'src/app/services/huxley/huxley.service';
import { ReplaySubject, Subject, debounce, interval } from 'rxjs';
import { IStationLookupResult } from './i-station-lookup-result';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { environment } from 'src/environments/environment.development';

declare var google: any;
@Component({
  selector: 'app-station-lookup',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent],
  templateUrl: './station-lookup.component.html',
  styleUrls: ['./station-lookup.component.scss'],
})
export class StationLookupComponent implements OnInit {
  @Output() selectedStation: EventEmitter<IStationLookupResult> =
    new EventEmitter();

  public searchTerm: string = '';
  public searchResults: IStationLookupResult[] = [];
  public placeholder: string = 'Search for a station...';
  public showSearchResults: boolean = false;
  public loading: boolean = false;
  public noResults: boolean = false;

  public key = environment.googleMapsApiKey;

  private location!: GeolocationPosition;
  private searchTermSubscription: Subject<string> = new ReplaySubject();
  constructor(private huxley: HuxleyService, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  private documentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (location: GeolocationPosition) => {
        this.location = location;
      }
    );

    this.searchTermSubscription.pipe(debounce(() => interval(500))).subscribe({
      next: (value: string) => {
        this.loading = true;
        this.huxley.getStationByName(value).subscribe({
          next: (result: IStationLookupResult[]) => {
            this.noResults = result.length === 0;
            this.searchResults = result;
            this.showSearchResults = true;
            this.loading = false;
          },
        });
      },
    });
  }

  onInputSelected(input: HTMLInputElement): void {
    input.select();
    this.showSearchResults = this.searchResults.length > 0;
  }

  onSearchTermChange(event: string): void {
    if (event.length < 3) {
      this.closeDropdown();
      return;
    }
    this.searchTermSubscription.next(event);
  }

  onResultSelected(event: IStationLookupResult): void {
    this.closeDropdown();
    this.searchTerm = event.stationName;
    this.selectedStation.emit(event);
  }

  findNearestStation(): void {
    const map = new google.maps.Map(document.createElement('div'));
    const request = {
      location: new google.maps.LatLng(
        this.location.coords.latitude,
        this.location.coords.longitude
      ),
      radius: 5000,
      types: ['train_station'],
    };

    new google.maps.places.PlacesService(map).nearbySearch(
      request,
      (results: any, status: any) => {
        this.huxley.getStationByName(results[0].name.toLowerCase()).subscribe({
          next: (response: IStationLookupResult[]) => {
            this.searchTerm = response[0].stationName;
          },
        });
      }
    );
  }

  private closeDropdown(): void {
    this.showSearchResults = false;
  }
}
