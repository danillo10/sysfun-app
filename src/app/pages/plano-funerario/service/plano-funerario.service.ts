import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';
import { IPlanoFunerario } from '../model/plano-funerario.model';

@Injectable({
  providedIn: 'root'
})
export class PlanoFunerarioService {

  constructor(private _http: HttpClient){}

  get(pesquisa: PesquisaModel): Promise<any> {
    return this._http.post(`${environment.host}pesquisa/avancada/planos-funerarios`, pesquisa)
    .pipe(res => res)
    .toPromise();
  }
}
