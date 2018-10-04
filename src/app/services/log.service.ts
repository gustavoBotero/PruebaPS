import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { urlConfig } from './url-config';
import { Log } from '../models/log.model';

@Injectable()
export class LogService {
    constructor(private httpClient: HttpClient) { }
    
    saveLog(log: string) {
        let url = urlConfig + 'log/.json';;

        return this.httpClient.post<string>
            (url, log)
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