import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { urlConfig } from './url-config';
import { GeneralInfo } from '../models/general-info.model';

@Injectable()
export class ProfessionalService {
    constructor(private httpClient: HttpClient) { }
    
    saveProfessional(professional: GeneralInfo): Observable<any> {
        let url = urlConfig + 'Profesionales/.json';;

        return this.httpClient.post<GeneralInfo>
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