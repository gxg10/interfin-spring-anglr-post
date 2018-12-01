import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ProfilRoutingModule } from './profil-routing.module';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { ObiectiveComponent } from './obiective/obiective.component';
import { RaportComponent } from './raport/raport.component';
import { StiriComponent } from './stiri/stiri.component';
import { StiriItemComponent } from './stiri/stiri-item/stiri-item.component';
import { StiriContinutComponent } from './stiri/stiri-continut/stiri-continut.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    PrezentareComponent,
    ObiectiveComponent,
    RaportComponent,
    StiriComponent,
    StiriItemComponent,
    StiriContinutComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    MaterialModule,
    PdfViewerModule
  ]
})
export class ProfilModule { }
