import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HuxleyRequest } from './huxley-request';

@Injectable({
  providedIn: 'root',
})
export class HuxleyService {
  private _baseURL: string = 'https://huxley2.azurewebsites.net';

  constructor(private http: HttpClient) {}

  //TODO: provide return types for observables

  /** Makes an http request to the endpoint generated from the huxleyRequest paramter.
   * @returns Observable<any>
   * @param huxleyRequest See also {@link HuxleyRequest}
   */
  getInformation(huxleyRequest: HuxleyRequest): Observable<any> {
    return this.http.get(this._baseURL + huxleyRequest.getRequestURL());
  }

  getStationByName(stationName: string): Observable<any> {
    return this.http.get(`${this._baseURL}/crs/${stationName}`);
  }
}
