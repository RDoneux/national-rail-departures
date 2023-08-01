import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationLookupComponent } from './station-lookup.component';
import { HttpClientModule } from '@angular/common/http';
import { IStationLookupResult } from './i-station-lookup-result';

describe('StationLookupComponent', () => {
  let component: StationLookupComponent;
  let fixture: ComponentFixture<StationLookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StationLookupComponent, HttpClientModule],
    });
    fixture = TestBed.createComponent(StationLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInputSelected', () => {
    let input: HTMLInputElement;
    beforeEach(() => {
      input = document.createElement('input');
    });
    it('should select input text', () => {
      spyOn(input, 'select');
      component.onInputSelected(input);
      expect(input.select).toHaveBeenCalledTimes(1);
    });
    it('should show search results if results length > 0', () => {
      component.searchResults = [
        { stationName: 'test-station-name', crsCode: 'AAP' },
      ];
      component.onInputSelected(input);
      expect(component.showSearchResults).toBeTrue();
    });
    it('should hide search results if results length === 0', () => {
      component.searchResults = [];
      component.onInputSelected(input);
      expect(component.showSearchResults).toBeFalse();
    });
  });

  describe('onSearchTermChange', () => {
    it('should close dropdown and return if event length is < 3', () => {
      component.showSearchResults = true;
      component.onSearchTermChange('');
      expect(component.showSearchResults).toBeFalse();
    });
    it('should not close dropdown and return if event length is > 2', () => {
      component.showSearchResults = true;
      component.onSearchTermChange('test-search-term');
      expect(component.showSearchResults).toBeTrue();
    });
  });

  describe('onResultSelected', () => {
    const stationLookupResult: IStationLookupResult = {
      stationName: 'test-station-name',
      crsCode: 'AAP',
    };
    it('should close dropdown', () => {
      component.showSearchResults = true;
      component.onResultSelected(stationLookupResult);
      expect(component.showSearchResults).toBeFalse();
    });
    it('should update the search term to the stationName from the result', () => {
      component.searchTerm = '';
      component.onResultSelected(stationLookupResult);
      expect(component.searchTerm).toEqual('test-station-name')
    })
    it('should emit the station lookup result', () => {
      spyOn(component.selectedStation, 'emit');
      component.onResultSelected(stationLookupResult);
      expect(component.selectedStation.emit).toHaveBeenCalledOnceWith(stationLookupResult)
    })
  });
});
