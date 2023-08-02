import { Component, OnInit } from '@angular/core';
import { HuxleyService } from './services/huxley/huxley.service';
import { HuxleyRequest } from './services/huxley/huxley-request';
import { debugInit } from './services/debug/debug';
import { IStationLookupResult } from './components/station-lookup/i-station-lookup-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'national-rail-departures';

  ngOnInit(): void {
    debugInit();
  }

  //TEST CODE

  onStationSelected(event: IStationLookupResult) {
    console.log(event);
  }

  constructor(private huxley: HuxleyService) {
    this.huxley
      .getInformation(
        HuxleyRequest.builder()
          .board('departures')
          .fromStation('GLD')
          .filter({ filterType: 'to', destinationStation: 'PHR' })
          .requestedRows(10)
          .expand(true)
          .build()
      )
      .subscribe({
        next: (result: any) => {
          // console.log(result);
        },
      });
  }
}
