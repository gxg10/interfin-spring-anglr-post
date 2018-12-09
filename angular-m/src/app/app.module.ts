import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UploadFileService } from './services/upload-file.service';
import { AuthService } from './auth/auth.service';
import { TokenStorageService } from './auth/token-storage.service';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from './services/nav.service';
import { StiriService } from './services/stiri.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { RaportService } from './services/raport.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    LoginComponent,
    NotFoundComponent,
    MenuListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule
  ],
  providers: [httpInterceptorProviders, UploadFileService, 
    AuthService, TokenStorageService, NavService,
  StiriService, RaportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
