import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MaterialModule } from "../../material.module";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
/* import { GoogleMapsModule } from "@angular/google-maps"; */
/* import { AgmCoreModule } from '@agm/core';  */


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    MaterialModule,
    LeafletModule
    /* GoogleMapsModule, */
     /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpV2SN0k5BqyVTQjTX8wU - hdCgBgktKY0'
    })  */
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MapModule { }
