import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContNouComponent } from '../about/cont-nou/cont-nou.component';

const routes: Routes = [
  {
    path: 'cont-nou',
    component: ContNouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
