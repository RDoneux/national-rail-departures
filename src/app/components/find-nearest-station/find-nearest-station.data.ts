import { INotification } from 'src/app/interfaces/i-notification';

export const noStationFound: INotification = {
  title: 'No station found',
  message:
    'No stations found within 5000 meters of your position. Please search for a station to find departures',
  type: 'warning',
};
