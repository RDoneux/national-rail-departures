import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.development';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const googleMapsApiKey: string = environment.googleMapsApiKey;

const script = document.createElement('script');
script.async = true;
script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places&callback=Function.prototype`;
document.getElementsByTagName('head')[0].appendChild(script);
