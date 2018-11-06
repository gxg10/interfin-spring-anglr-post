import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { ObiectiveComponent } from './obiective/obiective.component';
import { ContNouComponent } from './cont-nou/cont-nou.component';
import { RaportComponent } from './raport/raport.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'prezentare', component: PrezentareComponent
  },
  {
    path: 'obiective', component: ObiectiveComponent
  },
  {
    path: 'cont-nou', component: ContNouComponent
  },
  {
    path: 'rapoarte', component: RaportComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
