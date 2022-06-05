import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContasReceber } from '../model/contas-receber.model';
import { environment } from 'src/environments/environment';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';

@Injectable({
  providedIn: 'root'
})
export class ContasReceberService {

  constructor(private _http: HttpClient){}

    get(pesquisa: PesquisaModel): Promise<any> {
      return this._http.post(`${environment.host}pesquisa/avancada/contas-receber`, pesquisa)
      .pipe(res => res)
      .toPromise();
    }
}
