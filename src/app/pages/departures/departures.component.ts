import { Component, OnInit } from '@angular/core';
import { debounce, interval, timer } from 'rxjs';
import { IStationLookupResult } from 'src/app/components/station-lookup/i-station-lookup-result';
import { ITrainService } from 'src/app/interfaces/i-station-service';
import { HuxleyRequest } from 'src/app/services/huxley/huxley-request';
import { HuxleyService } from 'src/app/services/huxley/huxley.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.scss'],
})
export class DeparturesComponent implements OnInit {
  fromStation!: IStationLookupResult;
  toStation!: IStationLookupResult;

  trainServices: ITrainService[] = [];

  constructor(private huxley: HuxleyService) {}

  ngOnInit(): void {}

  swapInputs(): void {
    const toStationTemp = this.toStation;
    this.toStation = this.fromStation;
    this.fromStation = toStationTemp;
  }

  onFromStationChange(event: IStationLookupResult): void {
    this.fromStation = event;
    this.findDepartures();
  }

  onToStationChange(event: IStationLookupResult): void {
    this.toStation = event;
    this.findDepartures();
  }

  findDepartures(): void {
    if (!this.fromStation) return;
    this.huxley
      .getInformation(
        HuxleyRequest.builder()
          .board('departures')
          .fromStation(this.fromStation.crsCode)
          .expand(true)
          .filter(
            this.toStation
              ? { filterType: 'to', destinationStation: this.toStation.crsCode }
              : undefined
          )
          .build()
      )
      .pipe(debounce(() => interval(2000)))
      .subscribe({
        next: (result) => {
          //TODO: write a model for result
          this.trainServices = result.trainServices;
        },
      });
  }
}
