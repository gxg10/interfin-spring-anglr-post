import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObiectiveComponent } from './obiective/obiective.component';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { RaportComponent } from '../profil/raport/raport.component';
import { StiriComponent } from '../profil/stiri/stiri.component';
import { StiriStartComponent } from '../profil/stiri/stiri-start/stiri-start.component';
import { StiriContinutComponent } from '../profil/stiri/stiri-continut/stiri-continut.component';
import { SearchComponent } from './raport/search/search.component';
import { ArhivaVecheComponent } from './raport/arhiva-veche/arhiva-veche.component';

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
  },
  {
    path: 'arhiva',
    component: SearchComponent
  },
  {
    path: 'arhiva-veche',
    component: ArhivaVecheComponent
  },
  {
    path: 'stiri',
    component: StiriComponent,
    children: [
      {
        path: '', component: StiriStartComponent
      },
      {
        path: ':id', component: StiriContinutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
