import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { environment } from 'src/environments/environment';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { insertContasReceber } from '../../../shared/constants/sql/insert';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { IContasReceber } from '../model/contas-receber.model';
@Injectable({
  providedIn: 'root',
})
export class ContasReceberService {
  constructor(
    private _http: HttpClient,
    private databaseService: DatabaseService
  ) {}

  get(pesquisa: PesquisaModel): Promise<any> {
    return this._http
      .post(`${environment.host}pesquisa/avancada/contas-receber`, pesquisa)
      .pipe((res) => res)
      .toPromise();
  }

  liquidar(data) {
    return this._http
      .post(`${environment.host}contas-receber-baixas`, data)
      .pipe((res) => res);
  }

  dadosLiquidar(id) {
    return this._http
      .get(`${environment.host}dados/baixar/conta/receber/${id}`)
      .pipe((res) => res);
  }

  createDb(contas: IContasReceber[]) {
    this.databaseService.getDB().then((db: SQLiteObject) => {
      const insertItems = contas.map((conta) => {
        const data = conta.formatDb();
        return [insertContasReceber, data];
      });

      db.sqlBatch([insertItems])
        .then((e) => {
          console.log(e);
          console.log('Executed SQL');
        })
        .catch((e) => console.log(e));
    });
  }
}
