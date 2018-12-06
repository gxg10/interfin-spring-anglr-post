import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ContNouComponent } from '../about/cont-nou/cont-nou.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContNouComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AboutModule { }
