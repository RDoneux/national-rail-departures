import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeparturesRoutingModule } from './departures-routing.module';
import { DeparturesComponent } from './departures.component';
import { StationLookupComponent } from 'src/app/components/station-lookup/station-lookup.component';
import { StationServiceModule } from 'src/app/components/station-service/station-service.module';

@NgModule({
  declarations: [DeparturesComponent],
  imports: [
    CommonModule,
    DeparturesRoutingModule,
    StationLookupComponent,
    StationServiceModule,
  ],
})
export class DeparturesModule {}
