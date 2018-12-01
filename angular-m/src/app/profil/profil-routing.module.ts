import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrezentareComponent } from '../prezentare/prezentare.component';
import { ObiectiveComponent } from '../obiective/obiective.component';
import { RaportComponent } from '../raport/raport.component';
import { StiriComponent } from '../stiri/stiri.component';

const routes: Routes = [
  {
    path: 'prezentare',
    component: PrezentareComponent
  },
  {
    path: 'obiective',
    component: ObiectiveComponent
  },
  {
    path: 'rapoarte',
    component: RaportComponent
  },
  {
    path: 'stiri',
    component: StiriComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }