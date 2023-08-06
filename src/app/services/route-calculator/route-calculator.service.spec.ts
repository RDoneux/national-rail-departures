import { TestBed } from '@angular/core/testing';

import { RouteCalculatorService } from './route-calculator.service';

describe('RouteCalculatorService', () => {
  let service: RouteCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
