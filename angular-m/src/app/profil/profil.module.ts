import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ObiectiveComponent } from './obiective/obiective.component';
import { MaterialModule } from '../material.module';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { RaportComponent } from '../raport/raport.component';

@NgModule({
  declarations: [
    ObiectiveComponent,
    PrezentareComponent,
    RaportComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    MaterialModule
  ]
})
export class ProfilModule { }
