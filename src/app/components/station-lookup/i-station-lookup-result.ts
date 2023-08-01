import { CRS } from 'src/app/services/huxley/huxley.types';

export interface IStationLookupResult {
  stationName: string;
  crsCode: CRS;
}
