import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import {
  MdcButtonModule,
  MdcFabModule,
  MdcIconModule,
  MdcCardModule,
  MdcListModule,
  MdcRippleModule,
  MdcTypographyModule,
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcChipsModule,
  MdcMenuModule
} from '@angular-mdc/web';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,

    // Material
    MdcButtonModule,
    MdcFabModule,
    MdcIconModule,
    MdcCardModule,
    MdcListModule,
    MdcRippleModule,
    MdcTypographyModule,
    MdcTextFieldModule,
    MdcTopAppBarModule,
    MdcChipsModule,
    MdcMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
