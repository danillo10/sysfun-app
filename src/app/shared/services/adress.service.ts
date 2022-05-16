import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CepModel } from '../models/cep.model';

@Injectable({
  providedIn: 'root'
})
export class AdressService {
  cep: CepModel;

  constructor(
    private _http: HttpClient
  ) { }

  getCep(cep){
    return this._http.get<CepModel>(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(res => res)
  }

}
