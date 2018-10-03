import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { urlConfig } from './url-config';
import { Professional } from '../models/professional.model';

@Injectable()
export class ProfessionalService {
    constructor(private httpClient: HttpClient) { }
    
    getProfessinals(): Observable<Professional[]> {
        let url = urlConfig + 'Profesionales/.json';

        return this.httpClient.get<Professional[]>
            (url)
            .pipe(
                catchError(this.handleError)
            );
    }

    saveProfessional(professional: any) {
        let url = urlConfig + 'Profesionales/.json';;
console.log('algo', professional);
        return this.httpClient.post<Professional>
            (url, professional)
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