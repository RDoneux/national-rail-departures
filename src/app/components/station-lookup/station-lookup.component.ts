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

  private searchTermSubscription: Subject<string> = new ReplaySubject();
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

  onResultSelected(event: IStationLookupResult) {
    this.closeDropdown();
    this.searchTerm = event.stationName;
    this.selectedStation.emit(event);
  }

  private closeDropdown(): void {
    this.showSearchResults = false;
  }
}
