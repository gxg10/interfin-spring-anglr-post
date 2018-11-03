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
  MdcChipsModule
} from '@angular-mdc/web';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

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
    MdcChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
