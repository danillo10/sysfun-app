import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiHttpService {
    /**
     * Constructor
     *
     * @param {HttpClient} _http
     */
    constructor(
      private _http: HttpClient,
      private _router: Router
    ) { }

    public get(url: string, options?: any) {
        return this._http.get(url, options).pipe(
            res => res,
            catchError(this.handleError)
        );
    }

    public post(url: string, data: any, options?: any) {
        return this._http.post(url, data, options).pipe(
            res => res,
            catchError(this.handleError)
        );;
    }

    public put(url: string, data: any, options?: any) {
        return this._http.put(url, data, options).pipe(
            res => res,
            catchError(this.handleError)
        );;
    }

    public delete(url: string, options?: any) {
        return this._http.delete(url, options).pipe(
            res => res,
            catchError(this.handleError)
        );;
    }

    private handleError (error: Response | any) {
        if(error.status === 401){
            localStorage.removeItem("token");
            return this._router.navigate(['login']);
        }
        return;
    }
}
