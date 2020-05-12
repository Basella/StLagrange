import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const req = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Headers', 'X-Requested-With')
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS'),
    });
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // front end
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server side
          errorMessage = `Error Code: ${error.status}\nMessage: ${
            error.error == null ? error.message : error.error.text
          }`;
        }
        return throwError(errorMessage);
      })
    );
  }
}
