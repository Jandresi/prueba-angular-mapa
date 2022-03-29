import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";



const myModule=[
  MatCardModule,
  MatFormFieldModule,
   MatInputModule,
   MatIconModule,
   MatToolbarModule,
   MatSidenavModule
   ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports:[myModule]
})
export class MaterialModule { }
