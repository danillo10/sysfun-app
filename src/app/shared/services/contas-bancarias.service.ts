import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ContaBancariaModel } from '../models/conta-bancaria.model';

@Injectable({
  providedIn: 'root'
})
export class ContasBancariasService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(){
    return this._http.get<ContaBancariaModel[]>(`${environment.host}contasbancarias`)
    .pipe(res => res)
  }
}
