import { CRS } from '../services/huxley/huxley.types';

export interface ITrainService {
  formation: any;
  origin: OriginDestination[];
  destination: OriginDestination[];
  subsequentCallingPoints: {
    serviceType: number;
    serviceChangeRequired: boolean;
    callingPoint: CallingPoint[];
  }[];
  currentOrigins: any;
  currentDestinations: any;
  rsid: any;
  serviceIdPercentEncoded: string;
  serviceIdGuid: string;
  serviceIdUrlSafe: string;
  sta: any;
  eta: any;
  std: string;
  etd: string;
  platform: string | null;
  operator: string;
  operatorCode: string;
  isCircularRoute: boolean;
  isCancelled: boolean;
  filterLocationCancelled: false;
  serviceType: number;
  length: number;
  detachFront: boolean;
  isReverseFormation: boolean;
  cancelReason: string | null;
  delayReason: string | null;
  serviceId: string;
  adhocAlerts: any;
}

interface OriginDestination {
  locationName: string;
  crs: CRS;
  via: string | null;
  futureChangeTo: any;
  assocIsCancelled: boolean;
}

interface CallingPoint {
  locationName: string;
  crs: CRS;
  st: string;
  et: string;
  at: any;
  isCancelled: boolean;
  length: number;
  detachFront: boolean;
  formation: any;
  adhocAlerts: any;
}
