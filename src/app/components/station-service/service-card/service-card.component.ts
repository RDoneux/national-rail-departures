import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ITrainService } from 'src/app/interfaces/i-station-service';
import { IStationLookupResult } from '../../station-lookup/i-station-lookup-result';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ITrainService;
  @Input({ required: true }) requestStation!: IStationLookupResult;

  selected: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  private documentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.selected = false;
    }
  }

  onCardClick(): void {
    this.selected = !this.selected;
  }
}
