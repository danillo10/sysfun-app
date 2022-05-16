import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasClientesService {

  constructor(
    private _http: HttpClient
  ) { }

  get(){
    return this._http.get(`${environment.host}categorias-clientes`)
      .pipe(res => res)
  }
}
