import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObiectiveComponent } from './obiective/obiective.component';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { RaportComponent } from '../raport/raport.component';

const routes: Routes = [
  {
    path: 'obiective',
    component: ObiectiveComponent
  },
  {
    path: 'prezentare',
    component: PrezentareComponent
  },
  {
    path: 'rapoarte',
    component: RaportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
