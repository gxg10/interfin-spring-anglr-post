import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrezentareComponent } from './prezentare/prezentare.component';
import { ObiectiveComponent } from './obiective/obiective.component';
import { ContNouComponent } from './cont-nou/cont-nou.component';
import { RaportComponent } from './raport/raport.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StiriComponent } from './stiri/stiri.component';
import { StiriContinutComponent } from './stiri/stiri-continut/stiri-continut.component';
import { StiriStartComponent } from './stiri/stiri-start/stiri-start.component';

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
    path: 'upload', component: UploadComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'stiri', component: StiriComponent,
    children: [
      {
        path: '', component: StiriStartComponent
      },
      {
        path: ':id', component: StiriContinutComponent
      }
    ]
  },
  {
    path: '**', component: NotFoundComponent
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
