import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPlanoFunerario } from 'src/app/pages/plano-funerario/model/plano-funerario.model';
import { environment } from 'src/environments/environment';
import { IPlanosFunerarios } from '../models/planos-funerarios';

@Injectable({
  providedIn: 'root',
})
export class PlanosFunerariosService {
  constructor(private _http: HttpClient) {}

  first(): IPlanoFunerario {
    return new IPlanoFunerario();
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

  reorganizar(
    planoFunerario?: IPlanoFunerario,
    planosFunerarios?: IPlanoFunerario[]
  ): IPlanoFunerario[] {
    if (!planoFunerario.id) {
      return [this.first()];
    }

    if (
      (planoFunerario.numero == 1 && planosFunerarios.length == 1) ||
      (planoFunerario.numero > 1 && planosFunerarios.length == 1)
    )
      return [this.first()];

    return planosFunerarios.filter((d) => d.numero != planoFunerario.numero);
  }
}
