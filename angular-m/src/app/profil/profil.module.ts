import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { PrezentareComponent } from '../prezentare/prezentare.component';
import { MaterialModule } from '../material.module';
import { ObiectiveComponent } from '../obiective/obiective.component';
import { RaportComponent } from '../raport/raport.component';
import { StiriComponent } from '../stiri/stiri.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { StiriItemComponent } from '../stiri/stiri-item/stiri-item.component';


@NgModule({
  declarations: [
    PrezentareComponent,
    ObiectiveComponent,
    RaportComponent,
    StiriComponent,
    StiriItemComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    MaterialModule,
    PdfViewerModule
  ]
})
export class ProfilModule { }
