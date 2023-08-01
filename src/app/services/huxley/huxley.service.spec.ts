import { TestBed } from '@angular/core/testing';

import { HuxleyService } from './huxley.service';
import { HuxleyRequest, HuxleyRequestBuilder } from './huxley-request';
import { HttpClientModule } from '@angular/common/http';

describe('HuxleyService', () => {
  let service: HuxleyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HuxleyService);
  });

  describe('HuxleyRequest', () => {
    it('should create Huxley Request', () => {
      const huxleyRequest: HuxleyRequest = HuxleyRequest.builder()
        .board('departures')
        .fromStation('GLD')
        .filter({ filterType: 'from', destinationStation: 'WOK' })
        .requestedRows(1)
        .build();

      expect(huxleyRequest.getRequestURL()).toEqual(
        `/departures/GLD/from/WOK/1`
      );
    });
    it('should use default values when compulsory values are not provided', () => {
      const huxleyRequest: HuxleyRequest = HuxleyRequest.builder().build();
      expect(huxleyRequest.getRequestURL()).toEqual(`/all/CLJ/`);
    });
    it('should create Huxley Request Builder', () => {
      const huxleyBuilderRequest: HuxleyRequestBuilder = HuxleyRequest.builder()
        .board('arrivals')
        .fromStation('AAP')
        .filter({ filterType: 'to', destinationStation: 'AAT' })
        .requestedRows(2);

      expect(huxleyBuilderRequest.getBoard()).toEqual('arrivals');
      expect(huxleyBuilderRequest.getFromStation()).toEqual('AAP');
      expect(huxleyBuilderRequest.getFilter()).toEqual({
        filterType: 'to',
        destinationStation: 'AAT',
      });
      expect(huxleyBuilderRequest.getRequestedRows()).toBe(2);
    });
  });
});
