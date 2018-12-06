import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ObiectiveComponent } from './obiective/obiective.component';
import { MaterialModule } from '../material.module';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { RaportComponent } from '../profil/raport/raport.component';
import { StiriComponent } from '../profil/stiri/stiri.component';
import { StiriItemComponent } from '../profil/stiri/stiri-item/stiri-item.component';
import { StiriContinutComponent } from '../profil/stiri/stiri-continut/stiri-continut.component';
import { StiriStartComponent } from '../profil/stiri/stiri-start/stiri-start.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    ObiectiveComponent,
    PrezentareComponent,
    RaportComponent,
    StiriComponent,
    StiriItemComponent,
    StiriContinutComponent,
    StiriStartComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PdfViewerModule
  ]
})
export class ProfilModule { }
