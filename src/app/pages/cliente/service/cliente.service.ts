import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../model/cliente.model';
import { PesquisaModel } from '../model/pesquisa.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private _http: HttpClient
  ){}

  create(cliente: ClienteModel){
    return this._http.post(`${environment.host}clientes`, cliente)
      .pipe(res => res)
  }

  show(id: number | string){
    return this._http.get(`${environment.host}clientes/${id}`)
      .pipe(res => res)
  }

  update(id: number | string, cliente: ClienteModel){
    return this._http.put(`${environment.host}clientes/${id}`, cliente)
      .pipe(res => res)
  }

  get(pesquisa: any) {
    return this._http.post(`${environment.host}pesquisa/avancada/clientes`, pesquisa)
      .pipe(res => res)
  }

  pesquisaCPF(cpf: string){
    return this._http.post(`${environment.host}pesquisar/cpf`,{cpf})
      .pipe(res => res)
  }

  getProfissao(profissao: string){
    if(!profissao.trim()){
      return of([]);
    }

    return this._http.get(`${environment.host}pesquisar/profissao/obito/${profissao}`)
      .pipe(res => res);
  }
}
