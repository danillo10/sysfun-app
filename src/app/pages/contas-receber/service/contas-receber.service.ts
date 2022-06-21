import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';

@Injectable({
  providedIn: 'root'
})
export class ContasReceberService {

  constructor(private _http: HttpClient) { }

  get(pesquisa: PesquisaModel): Promise<any> {
    return this._http.post(`${environment.host}pesquisa/avancada/contas-receber`, pesquisa)
      .pipe(res => res)
      .toPromise();
  }

  liquidar(data) {
    return this._http.post(`${environment.host}contas-receber-baixas`, data)
      .pipe(res => res)
  }

  dadosLiquidar(id){
    return this._http.get(`${environment.host}dados/baixar/conta/receber/${id}`)
      .pipe(res => res)
  }
}
