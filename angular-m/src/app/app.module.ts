import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { ObiectiveComponent } from './obiective/obiective.component';
import { ContNouComponent } from './cont-nou/cont-nou.component';
import { RaportComponent } from './raport/raport.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UploadFileService } from './upload-file.service';
import { AuthService } from './auth/auth.service';
import { TokenStorageService } from './auth/token-storage.service';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { NavService } from './nav.service';
import { StiriComponent } from './stiri/stiri.component';
import { StiriContinutComponent } from './stiri/stiri-continut/stiri-continut.component';
import { StiriItemComponent } from './stiri/stiri-item/stiri-item.component';
import { StiriStartComponent } from './stiri/stiri-start/stiri-start.component';
import { RaportNewComponent } from './raport/raport-new/raport-new.component';
import { RaportStartComponent } from './raport/raport-start/raport-start.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PrezentareComponent,
    ObiectiveComponent,
    ContNouComponent,
    RaportComponent,
    UploadComponent,
    LoginComponent,
    NotFoundComponent,
    MenuListItemComponent,
    StiriComponent,
    StiriContinutComponent,
    StiriItemComponent,
    StiriStartComponent,
    RaportNewComponent,
    RaportStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    PdfViewerModule
  ],
  providers: [httpInterceptorProviders, UploadFileService, AuthService, TokenStorageService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
