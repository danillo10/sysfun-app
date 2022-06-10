import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  constructor(
    private _http: HttpClient
  ) { }

  get(){
    return this._http.get(`${environment.host}formas-pagamentos`)
      .pipe(res => res)
  }
}
