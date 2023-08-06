import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StationLookupComponent } from './components/station-lookup/station-lookup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationModule } from './components/notification/notification.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StationLookupComponent,
    NotificationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
