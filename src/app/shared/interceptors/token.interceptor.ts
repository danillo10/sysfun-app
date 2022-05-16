import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LocalstorageService } from '../services/localstorage.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(
    public router: Router,
    private localStorageService: LocalstorageService
  ){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = req.url.split('/');
    const apiUrl: Array<any> = environment.host.split('/');
    const token = this.localStorageService.get('token');

    if(token && (requestUrl[2] === apiUrl[2])){
        const newRequest = req.clone({setHeaders: {'Authorization': 'Bearer ' + token}});
        return next.handle(newRequest)
        .pipe(tap(
          (evento: HttpEvent<any>) => {
            if (evento instanceof HttpErrorResponse) {
              if(evento.error.message == 'The token has been blacklisted'){
                localStorage.removeItem("token");
                this.router.navigate(['/login']);
              }
              return throwError("Ocorreu um erro na sua requisição!");
            }
          }
        ))
    }else{
      return next.handle(req)
        .pipe(catchError(err => {
          if (err instanceof HttpErrorResponse) {
            if(err.status == 401){
              localStorage.removeItem("token");
              this.router.navigate(['/login']);
            }
            return throwError("Ocorreu um erro na sua requisição!");
          }
        }))
    }
  }

}
