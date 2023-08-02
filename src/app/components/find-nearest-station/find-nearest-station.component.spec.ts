import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNearestStationComponent } from './find-nearest-station.component';

describe('FindNearestStationComponent', () => {
  let component: FindNearestStationComponent;
  let fixture: ComponentFixture<FindNearestStationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FindNearestStationComponent]
    });
    fixture = TestBed.createComponent(FindNearestStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
