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

  // async create(plano: IPlanoFunerario): Promise<any> {
  //   // if (!navigator.onLine) {
  //   //   let planosNovos = this.localStorageService.getParse('planosNovos');
  //   //   let data = await this.nativeStorageService.getParse('planos');

  //   //   data = JSON.parse(data);

  //   //   planosNovos.push(plano);

  //   //   data = [plano, ...data];

  //   //   this.localStorageService.setParse('clientesNovos', planosNovos);
  //   //   this.nativeStorageService.setParse('clientes', data);

  //   //   return of(true).toPromise();
  //   // }

  //   return this._http
  //     .post(`${environment.host}planos-funerarios`, plano)
  //     .pipe((res) => res)
  //     .toPromise();
  // }

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
    const insertItems = planos.map((plano) => {
      const data = plano.formatDb();
      return [insertPlanosFunerarios, data];
    });

    this.databaseService
      .getDB()
      .sqlBatch([insertItems])
      .then((e) => {
        console.log(e);
        console.log('Executed SQL');
      })
      .catch((e) => console.log(e));
  }

  create(planos: PlanoFunerarioModel[]){
    console.log('create'); 
    const insertItems = planos.map((plano) => {
      const data = this.formatArray(plano);
      console.log('planos.map');
      console.log(data);
      return data;
    });
    console.log(insertItems);
    const savePlano = this.databaseService.getDB().executeSql(insertPlanosFunerarios, insertItems);
    console.log('save plano');
    console.log(savePlano);
    return savePlano;
  }

  formatArray(planos: PlanoFunerarioModel) {
    console.log('formatArray');
    console.log(planos);

    return [
      planos.cliente ?? 0,
      planos.indicacao ?? 0,
      // planos.tecnico ?? '',
      // planos.profissional ?? '',
      // planos.taxa_adesao ?? '',
      // planos.valor_bruto ?? '',
      // planos.data_inicial ?? '',
      // planos.forma_pagamento ?? '',
      // planos.condicao_pagamento ?? '',
      // planos.qtd_parcelas ?? '',
      // planos.indicacao_parcelas ?? '',
      // planos.tipo_liberacao ?? '',
      // planos.carencia ?? '',
      // planos.carencia_vencimento ?? '',
      // planos.rg_r_pedente ?? '',
      // planos.cpf_r_pendente ?? '',
      // planos.residencia_r_pendente ?? '',
      // planos.casamento_r_pendente ?? '',
      // planos.data_os ?? '',
      // planos.data_carne ?? '',
      // planos.data_entrega ?? '',
      // planos.hora_realizacao ?? '',
      // planos.obs ?? '',
      // planos.obs_internas ?? '',
      // planos.contas_lancadas ?? '',
      // planos.contas_pagar ?? '',
      // planos.situacao ?? '',
      // planos.criado_por ?? '',
      // planos.atualizado_por ?? '',
      // planos.created_at ?? '',
      // planos.updated_at ?? '',
      // planos.repetir_valor ?? '',

      // planos.id ?? '',
      // planos.tipo ?? '',
      // planos.cliente ?? '',
      // planos.cliente_nome ?? '',
      // planos.indicacao ?? '',
      // planos.indicacao_parcelas ?? '',
      // planos.tipo_liberacao ?? '',
      // planos.tecnico ?? '',
      // planos.tecnico_nome ?? '',
      // planos.profissional ?? '',
      // planos.profissional_nome ?? '',
      // planos.situacao ?? '',
      // planos.lista_preco ?? '',
      // planos.falecido ?? '',
      // planos.contato ?? '',
      // planos.valor_servicos ?? '',
      // planos.valor_produtos ?? '',
      // planos.valor_despesas ?? '',
      // planos.valor_desconto_v ?? '',
      // planos.valor_desconto_p ?? '',
      // planos.valor_bruto ?? '',
      // planos.valor_liquido ?? '',
      // planos.taxa_adesao ?? '',
      // planos.data_inicial ?? '',
      // planos.forma_pagamento ?? '',
      // planos.condicao_pagamento ?? '',
      // planos.qtd_parcelas ?? '',
      // planos.carencia ?? '',
      // planos.rg_f_pendente ?? '',
      // planos.cpf_f_pendente ?? '',
      // planos.declaracao_f_pendente ?? '',
      // planos.casamento_f_pendente ?? '',
      // planos.residencia_f_pendente ?? '',
      // planos.nascimento_f_pendente ?? '',
      // planos.cobito_f_pendente ?? '',
      // planos.auxilio_f_pendente ?? '',
      // planos.rg_r_pedente ?? '',
      // planos.cpf_r_pendente ?? '',
      // planos.residencia_r_pendente ?? '',
      // planos.casamento_r_pendente ?? '',
      // planos.data_os ?? '',
      // planos.data_entrega ?? '',
      // planos.garantia ?? '',
      // planos.data_realizacao ?? '',
      // planos.hora_realizacao ?? '',
      // planos.referencia ?? '',
      // planos.obs ?? '',
      // planos.obs_internas ?? '',
      // planos.equipamento ?? '',
      // planos.problema ?? '',
      // planos.obs_recebimento ?? '',
      // planos.contas_lancadas ?? '',
      // planos.laudo ?? '',
      // planos.criado_por ?? '',
      // planos.atualizado_por ?? '',
      // planos.os_gerada ?? '',
      // planos.repetir_valor ?? '',
      // planos.pesquisados ?? '',
      // planos.updated_at ?? '',
      // planos.carencia_vencimento ?? '',
      // planos.rg_r_pedente ?? '',
      // planos.data_carne ?? '',
      // planos.contas_pagar ?? '',
      // planos.created_at ?? '',
    ];
  }
}
