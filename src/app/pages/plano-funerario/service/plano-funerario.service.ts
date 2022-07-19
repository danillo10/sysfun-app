import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';
import { IPlanoFunerario } from '../model/plano-funerario.model';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { NativeStorageService } from 'src/app/shared/services/native-storage.service';
import { of } from 'rxjs';
import { ClienteModel } from '../../cliente/model/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class PlanoFunerarioService {
  constructor(
    private _http: HttpClient,
    private localStorageService: LocalstorageService,
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
    if (!navigator.onLine) {
      let planosNovos = this.localStorageService.getParse('planosNovos');
      let data = await this.nativeStorageService.getParse('planos');

      data = JSON.parse(data);

      planosNovos.push(plano);

      data = [plano, ...data];

      this.localStorageService.setParse('clientesNovos', planosNovos);
      this.nativeStorageService.setParse('clientes', data);

      return of(true).toPromise();
    }

    return this._http
      .post(`${environment.host}planos-funerarios`, plano)
      .pipe((res) => res)
      .toPromise();
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
}
