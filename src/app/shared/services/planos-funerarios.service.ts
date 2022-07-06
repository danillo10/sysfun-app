import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPlanosFunerarios } from '../models/planos-funerarios';

@Injectable({
  providedIn: 'root',
})
export class PlanosFunerariosService {
  constructor(private _http: HttpClient) {}

  first(): IPlanosFunerarios {
    return new IPlanosFunerarios();
  }

  add(planosFunerarios: IPlanosFunerarios[]): IPlanosFunerarios {
    let ultimoCampo = planosFunerarios.length;
    // let ultimoNumero = planosFunerarios[ultimoCampo - 1].numero;

    let dependente = this.first();
    // dependente.numero = ultimoNumero + 1;

    return dependente;
  }

  delete(dependente: IPlanosFunerarios): Observable<any> {
    return this._http
      .get(`${environment.host}planos-funerarios/remover/${dependente.id}`)
      .pipe((res) => res);
  }

  get(data) {
    if (!data || !data.nome.trim()) {
      return of([]);
    }

    return this._http
      .get(`${environment.host}pesquisar/planos-funerarios/${data.nome}`)
      .pipe((res) => res);
  }

  dependenteUsuario(id) {
    return this._http
      .post(`${environment.host}pesquisar/PlanosFunerarios/cadastro`, { id })
      .pipe((res) => res);
  }

  //   reorganizar(planosFunerario?: IPlanosFunerarios, planosFunerarios?: IPlanosFunerarios[]): IPlanosFunerarios[]{
  //     if(!planosFunerario){
  //       return [this.first()];
  //     }

  //     if (
  //       (planosFunerario.numero == 1 && planosFunerarios.length == 1) ||
  //       (planosFunerario.numero > 1 && planosFunerarios.length == 1)
  //     )
  //       return [this.first()];

  //     return planosFunerarios.filter(d => d.numero != planosFunerario.numero);
  //   }
}
