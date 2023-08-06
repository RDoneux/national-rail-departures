import { Injectable } from '@angular/core';
import { HuxleyService } from '../huxley/huxley.service';
// import {google} from 'google-maps'

// declare var google: google;
// declare module google: google;

declare var google: any;


@Injectable({
  providedIn: 'root',
})
export class RouteCalculatorService {
  private stationHubList: string[] = [
    'London Waterloo',
    'London Victoria',
    'London Bridge',
    'London Liverpool Street',
    'Stratford',
    'London Paddington',
    'London Euston',
    'Birmingham New Street',
    'London King\'s Cross',
    'Manchester Piccadilly',
    'Leeds',
    'London St Pancras International',
    'Highbury & Islington',
    'Clapham Junction',
    'London Charing Cross',
    'Glasgow Central',
    'East Croydon',
    'Canada Water',
    'Edinburgh Waverley',
    'Vauxhall',
    'Barking',
    'Brighton',
    'Liverpool Central',
  ]
  constructor(private huxleyService: HuxleyService) {}

  doTheThink(): void {
    // const directionsService = new google.maps.DirectionsService();

    // const request = {
    //   origin: 'Worplesdon Station',
    //   destination: 'Glasgow Station',
    //   travelMode: google.maps.TravelMode['TRANSIT'],
    // };

    // directionsService.route(request, (result: any, status: any) => {
    //   console.log(result);
    // });

  }
}
