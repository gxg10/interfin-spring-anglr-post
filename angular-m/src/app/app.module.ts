import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContNouComponent } from './cont-nou/cont-nou.component';
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
import { StiriComponent } from './stiri/stiri.component';
import { StiriContinutComponent } from './stiri/stiri-continut/stiri-continut.component';
import { StiriItemComponent } from './stiri/stiri-item/stiri-item.component';
import { StiriStartComponent } from './stiri/stiri-start/stiri-start.component';
import { StiriService } from './services/stiri.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContNouComponent,
    UploadComponent,
    LoginComponent,
    NotFoundComponent,
    MenuListItemComponent,
    StiriComponent,
    StiriContinutComponent,
    StiriItemComponent,
    StiriStartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [httpInterceptorProviders, UploadFileService, 
    AuthService, TokenStorageService, NavService,
  StiriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
