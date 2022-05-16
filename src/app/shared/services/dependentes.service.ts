import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IDependentes } from 'src/app/pages/cliente/model/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DependentesService {

  constructor(
    private _http: HttpClient
  ) { }

  first(): IDependentes{
    return {
      numero: 1,
      id: null,
      cliente: null,
      cliente_id: null,
      nome: null,
      tipo: null,
      telefone: null,
      rg: null,
      cpf: null,
      data_nasc: null,
      criado_por: null,
      pesquisados: [],
      created_at: null,
      updated_at: null
    }
  }

  add(dependentes: IDependentes[]): IDependentes{
    let ultimoCampo = dependentes.length;
    let ultimoNumero = dependentes[ultimoCampo - 1].numero;

    let dependente = this.first();
    dependente.numero = ultimoNumero + 1;

    return dependente;
  }

  delete(dependente: IDependentes, dependentes: IDependentes[]): IDependentes[] {
    if(
      (dependente.numero == 1 && dependentes.length == 1) ||
      (dependente.numero > 1 && dependentes.length == 1)
    )
      return [this.first()];

    return dependentes.filter(d => d.numero != dependente.numero);
  }

  get(data){
    if(!data || !data.nome.trim()){
      return of([]);
    }

    return this._http.post(`${environment.host}pesquisar/clientes/dependentes`,
      {cliente: data.nome, ids: data.ids}
    )
    .pipe(res => res)
  }

  dependenteUsuario(id){
    return this._http.post(`${environment.host}pesquisar/dependentes/cadastro`,
      {id}
    ).pipe(res => res)
  }


}
