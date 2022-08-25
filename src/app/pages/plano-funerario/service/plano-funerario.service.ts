import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';
import {
  IPlanoFunerario,
  PlanoFunerarioModel,
} from '../model/plano-funerario.model';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { NativeStorageService } from 'src/app/shared/services/native-storage.service';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { insertPlanosFunerarios } from '../../../shared/constants/sql/insert';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root',
})
export class PlanoFunerarioService {
  constructor(
    private _http: HttpClient,
    private localStorageService: LocalstorageService,
    private databaseService: DatabaseService,
    private nativeStorageService: NativeStorageService
  ) {}

  get(pesquisa: PesquisaModel): Promise<any> {
    return this._http
      .post(`${environment.host}pesquisa/avancada/planos-funerarios`, pesquisa)
      .pipe((res) => res)
      .toPromise();
  }

  salvaPlanoAplicativo(plano: IPlanoFunerario) {
    this.salvaPlanos(plano, 'aplicativo');
    this.salvaClientesNovos(plano, 'aplicativo');
  }

  salvaPlanosSistema(plano: IPlanoFunerario) {
    this.salvaPlanos(plano, 'sistema');
    this.salvaClientesNovos(plano, 'sistema');
  }

  async create(plano: IPlanoFunerario): Promise<any> {
    // if (!navigator.onLine) {
    //   let planosNovos = this.localStorageService.getParse('planosNovos');
    //   let data = await this.nativeStorageService.getParse('planos');

    //   data = JSON.parse(data);

    //   planosNovos.push(plano);

    //   data = [plano, ...data];

    //   this.localStorageService.setParse('clientesNovos', planosNovos);
    //   this.nativeStorageService.setParse('clientes', data);

    //   return of(true).toPromise();
    // }

    return this._http
      .post(`${environment.host}planos-funerarios`, plano)
      .pipe((res) => res)
      .toPromise();
  }

  async update(plano: IPlanoFunerario): Promise<any> {
    return this._http
      .put(`${environment.host}planos-funerarios/${plano.id}`, plano)
      .pipe((res) => res)
      .toPromise();
  }

  async show(id: number | string, criado_em: string) {
    // if (!navigator.onLine) {
    //   let cliente: ClienteModel;

    //   if (criado_em == 'aplicativo') {
    //     const clientes = this.localStorageService.getParse('clientesNovos');
    //     cliente = clientes.find(cliente => cliente.aplicativo_id == id);
    //   } else {
    //     let data = await this.nativeStorageService.getParse('clientes');
    //     data = JSON.parse(data);
    //     cliente = data.find(cliente => cliente.id == id);
    //   }

    //   return of({ cliente: [cliente] })
    //     .toPromise();
    // }

    return this._http
      .get(`${environment.host}planos-funerarios/${id}`)
      .pipe((res) => res)
      .toPromise();
  }

  getDependentes(id) {
    return this._http
      .get(`${environment.host}pesquisar/dependentes/${id}`)
      .pipe((res) => res);
  }

  salvaClientesNovos(plano: IPlanoFunerario, criadoEm: string) {
    let planos = this.localStorageService.getParse('PlanoNovos');

    const key = criadoEm == 'sistema' ? 'id' : 'aplicativo_id';

    const clt = planos.find((c) => c[key] == plano[key]);

    planos = this.handlePlanos(plano, planos, key, clt);

    this.localStorageService.setParse('PlanosNovos', planos);
  }

  async salvaPlanos(plano: IPlanoFunerario, criadoEm: string) {
    let clientes = await this.nativeStorageService.getParse('planos');

    clientes = JSON.parse(clientes);

    const key = criadoEm == 'sistema' ? 'id' : 'aplicativo_id';

    clientes = this.handlePlanos(plano, clientes, key, true);

    this.nativeStorageService.setParse('clientes', clientes);
  }

  handlePlanos(
    plano: IPlanoFunerario,
    planos: IPlanoFunerario[],
    key: string,
    clt?: any
  ) {
    if (clt) {
      planos = planos.map((c) => {
        if (c[key] == plano[key]) {
          c = plano;
        }
        return c;
      });
    } else {
      planos = [plano, ...planos];
    }

    return planos;
  }

  createDb(planos: PlanoFunerarioModel[]) {
    this.databaseService.getDB().then((db: SQLiteObject) => {
      const insertItems = planos.map((plano) => {
        const data = plano.formatDb();
        return [insertPlanosFunerarios, data];
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
