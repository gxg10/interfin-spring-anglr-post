import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContNouComponent } from './cont-nou/cont-nou.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {
    path: 'cont-nou',
    component: ContNouComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
