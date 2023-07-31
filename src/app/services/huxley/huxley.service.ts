import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HuxleyRequest } from './huxley-request';

@Injectable({
  providedIn: 'root',
})
export class HuxleyService {
  constructor(private http: HttpClient) {}

  /** Makes an http request to the endpoint generated from the huxleyRequest paramter.
   * @returns Observable<any>
   * @param huxleyRequest See also {@link HuxleyRequest}
   */
  getInformation(huxleyRequest: HuxleyRequest): Observable<any> {
    return this.http.get(huxleyRequest.getRequestURL());
  }
}
