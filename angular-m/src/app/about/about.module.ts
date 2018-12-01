import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContNouComponent } from './cont-nou/cont-nou.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    ContNouComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    ]
})
export class AboutModule { }
