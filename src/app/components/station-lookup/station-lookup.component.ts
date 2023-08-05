import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HuxleyService } from 'src/app/services/huxley/huxley.service';
import { ReplaySubject, Subject, debounce, interval } from 'rxjs';
import { IStationLookupResult } from './i-station-lookup-result';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { environment } from 'src/environments/environment.development';
import { FindNearestStationComponent } from '../find-nearest-station/find-nearest-station.component';

@Component({
  selector: 'app-station-lookup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoadingSpinnerComponent,
    FindNearestStationComponent,
  ],
  templateUrl: './station-lookup.component.html',
  styleUrls: ['./station-lookup.component.scss'],
})
export class StationLookupComponent implements OnInit {
  @Input() name!: string;
  @Input() findNearestStationOnLoad: boolean = false;

  @Input() public set station(value: IStationLookupResult) {
    this.onResultSelected(value);
  }

  @Output() selectedStation: EventEmitter<IStationLookupResult> =
    new EventEmitter();

  public searchTerm: string = '';
  public searchResults: IStationLookupResult[] = [];
  public placeholder: string = 'Search for a station...';
  public showSearchResults: boolean = false;
  public loading: boolean = false;
  public noResults: boolean = false;

  public key = environment.googleMapsApiKey;

  private searchTermSubscription: Subject<string> = new ReplaySubject();
  private selectedStationModel: IStationLookupResult | undefined;
  constructor(private huxley: HuxleyService, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  private documentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  ngOnInit(): void {
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

  onResultSelected(event: IStationLookupResult | undefined): void {
    if (event?.crsCode === this.selectedStationModel?.crsCode) return;
    this.closeDropdown();
    this.searchTerm = event?.stationName ?? '';
    this.selectedStationModel = event;
    this.selectedStation.emit(event);
  }

  private closeDropdown(): void {
    this.showSearchResults = false;
  }
}
