import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { urlConfig } from './url-config';
import { Patient } from '../models/patient.model';

@Injectable()
export class PatientService {
    constructor(private httpClient: HttpClient) { }
    
    getPatients(): Observable<any> {
        let url = urlConfig + 'Pacientes/.json';

        return this.httpClient.get<Patient[]>
            (url)
            .pipe(
                catchError(this.handleError)
            );
    }

    savePatient(patient: Patient): Observable<any> {
        let url = urlConfig +'Pacientes/.json';

        return this.httpClient.post<Patient>
            (url, patient)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError (
          'Something bad happened; please try again later.'
        );
    };
}