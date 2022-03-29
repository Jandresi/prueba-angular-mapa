import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
/* import { GoogleMapsModule } from "@angular/google-maps"; */
/* import { AgmCoreModule } from '@agm/core';
"@angular/google-maps": "^12.0.5"
"@agm/core": "^3.0.0-beta.0"
"@types/googlemaps": "^3.39.13" */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    /* GoogleMapsModule, */
   /*  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpV2SN0k5BqyVTQjTX8wU - hdCgBgktKY0'
    }) */
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
