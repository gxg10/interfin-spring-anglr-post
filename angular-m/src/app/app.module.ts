import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UploadFileService } from './upload-file.service';
import { AuthService } from './auth/auth.service';
import { TokenStorageService } from './auth/token-storage.service';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from './nav.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule
  ],
  providers: [httpInterceptorProviders, UploadFileService, AuthService, TokenStorageService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
