import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private _http: HttpClient
  ){}

  create(cliente){
    return this._http.post(`${environment.host}clientes`, cliente)
      .pipe(res => res)
  }

  get(options) {
    return this._http.post(`${environment.host}pesquisa/avancada/clientes`, options)
      .pipe(res => res)
  }

  pesquisaCPF(cpf){
    return this._http.post(`${environment.host}pesquisar/cpf`,{cpf})
      .pipe(res => res)
  }

  getProfissao(profissao){
    if(!profissao.trim()){
      return of([]);
    }

    return this._http.get(`${environment.host}pesquisar/profissao/obito/${profissao}`)
      .pipe(res => res);
  }
}
