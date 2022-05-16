import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SincronizarService {

  constructor(
    private _http: HttpClient
  ) { }

  clientes(data) {
    return this._http.post(`${environment.host}pesquisa/avancada/clientes`, data)
      .toPromise();
  }
}
