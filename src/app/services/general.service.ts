import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { Professional } from '../models/professional.model';
import { urlConfig } from './url-config';
import { Patient } from '../models/patient.model';

@Injectable()
export class GeneralService {
    constructor(private httpClient: HttpClient) { }
    
    getProfessinals(patient: Professional): Observable<Professional[]> {
        let url = urlConfig + 'Profesionales/.json';

        return this.httpClient.get<Professional[]>
            (url)
            .pipe(
                catchError(this.handleError)
            );
    }

    getPatients(patient: Patient): Observable<any> {
        let url = urlConfig + 'Pacientes/.json';

        return this.httpClient.get<Patient[]>
            (url)
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