import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { GeneralInfoComponent } from './components/shared/general-info/general-info.component';
import { LinkedInfoComponent } from './components/shared/linked-info/linked-info.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { CreateProfessionalComponent } from './components/create-professional/create-professional.component';
import { AppRoutingModule } from './app-routing.module';
import { GeneralService } from './services/general.service';
import { ProfessionalService } from './services/professional.service';
import { PatientService } from './services/pacient.service';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { ListProfessionalComponent } from './components/list-professional/list-professional.component';
import { LogService } from './services/log.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoComponent,
    LinkedInfoComponent,
    HomeComponent,
    CreatePatientComponent,
    CreateProfessionalComponent,
    ListPatientComponent,
    ListProfessionalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    AppRoutingModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [GeneralService, ProfessionalService, PatientService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
