import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { IContasReceber } from '../../model/contas-receber.model';
import { ContasReceberBaixaModel } from '../model/conta-receber-baixa.model';

@Injectable({
  providedIn: 'root'
})
export class LiquidarService {
  contaAtiva: ContasReceberBaixaModel;
  contaReceber: ContasReceberBaixaModel;
  pagamentos: ContasReceberBaixaModel[];

  constructor(
    private _http: HttpClient
  ) { }

  liquidar(data){
    return this._http.post(`${environment.host}contas-receber-baixas`, data)
      .pipe(res => res)
  }

}
