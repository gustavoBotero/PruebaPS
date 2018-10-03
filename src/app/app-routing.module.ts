import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateProfessionalComponent } from './components/create-professional/create-professional.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'professionals',
    component: CreateProfessionalComponent
  },
  {
    path: 'patient',
    component: CreatePatientComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }