import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { IContasReceber } from 'src/app/pages/contas-receber/model/contas-receber.model';

@Injectable({
  providedIn: 'root'
})
export class ModalReciboService {

  constructor(
    private http: HttpClient
  ) { }

  imprimir(conta: IContasReceber) {
    return this.http.get(`${environment.host}dados/baixar/conta/receber/${conta.id}`)
      .pipe(res => res);
  }

  imprimirRecibo(conta: IContasReceber){
    return this.http.post(`${environment.host}pdf/recibo`, conta)
      .pipe(res => res);
  }
}
