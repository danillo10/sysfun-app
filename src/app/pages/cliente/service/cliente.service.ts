import { Injectable, SimpleChanges } from '@angular/core';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { NativeStorageService } from 'src/app/shared/services/native-storage.service';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { environment } from 'src/environments/environment';

import { ClienteModel } from '../model/cliente.model';
import { PesquisaModel } from '../model/pesquisa.model';

import * as _ from 'lodash';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { insertClientes } from '../../../shared/constants/sql/insert';
import { selectClientes } from '../../../shared/constants/sql/select';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  status: boolean;
  total: number;
  celular: any;
  clientes$: Observable<any>;
  pesquisa = new Subject<any>();

  clientes: ClienteModel[];

  constructor(
    private _http: HttpClient,
    private localStorageService: LocalstorageService,
    private databaseService: DatabaseService,
    private nativeStorageService: NativeStorageService
  ) {
    this.observer;
  }

  create(clientes: ClienteModel[]) {
    console.log('create');
    const insertItems = clientes.map((cliente) => {
      const data = this.formatArray(cliente);
      console.log('clientes.map');
      console.log(data);
      return data;
    });
    console.log(insertItems);

    return this.databaseService.getDB().executeSql(insertClientes, insertItems);
  }

  getFromDb() {
    return this.databaseService.getDB().executeSql(selectClientes, []);
  }

  formatArray(cliente: ClienteModel) {
    console.log('formatArray');
    console.log(cliente);

    return [
      cliente.id_dependente ?? '',
      cliente.aplicativo ?? '',
      cliente.situacao ?? '',
      cliente.pessoa ?? '',
      cliente.cnpjcpf ?? '',
      cliente.rg ?? '',
      cliente.emissor ?? '',
      cliente.razao_social ?? '',
      cliente.nome_fantasia ?? '',
      cliente.data_nascimento ?? '',
      cliente.idade ?? '',
      cliente.naturalidade ?? '',
      cliente.sexo ?? '',
      cliente.estado_civil ?? '',
      cliente.nome_pai ?? '',
      cliente.nome_mae ?? '',
      cliente.inscricao_municipal ?? '',
      cliente.inscricao_estadual ?? '',
      cliente.cep ?? '',
      cliente.endereco ?? '',
      cliente.numero ?? '',
      cliente.complemento ?? '',
      cliente.bairro ?? '',
      cliente.cidade ?? '',
      cliente.ibge ?? '',
      cliente.estado ?? '',
      cliente.celular ?? '',
      cliente.email ?? '',
      cliente.obs ?? '',
      cliente.tipo_cadastral ?? '',
      cliente.local_obito ?? '',
      cliente.motivo_obito ?? '',
      cliente.data_obito ?? '',
      cliente.data_atestado ?? '',
      cliente.profissao ?? '',
      cliente.cep_obito ?? '',
      cliente.endereco_obito ?? '',
      cliente.numero_obito ?? '',
      cliente.complemento_obito ?? '',
      cliente.bairro_obito ?? '',
      cliente.cidade_obito ?? '',
      cliente.estado_obito ?? '',
      cliente.categoria ?? '',
      cliente.cNome ?? '',
      cliente.cNascimento ?? '',
      cliente.cTelefone ?? '',
      cliente.cRamal ?? '',
      cliente.cFax ?? '',
      cliente.cCelular ?? '',
      cliente.cEmail ?? '',
      cliente.cWebsite ?? '',
      cliente.eTipo_endereco ?? '',
      cliente.eTipo_pessoa ?? '',
      cliente.eCnpjcpf ?? '',
      cliente.eCep ?? '',
      cliente.eEndereco ?? '',
      cliente.eBairro ?? '',
      cliente.eNumero ?? '',
      cliente.eComplemento ?? '',
      cliente.eCidade ?? '',
      cliente.eEstado ?? '',
      cliente.lista_preco ?? '',
      cliente.condicao_pagamento ?? '',
      cliente.conta_bancaria ?? '',
      cliente.limite_credito ?? '',
      cliente.limite_ultrapassar ?? '',
      cliente.data_inicial ?? '',
      cliente.data_final ?? '',
      cliente.created_at ?? '',
      cliente.updated_at ?? '',
      cliente.data_cadastro ?? '',
      cliente.hora_cadastro ?? '',
      cliente.horario ?? '',
      cliente.plano ?? '',
      cliente.taxa_adesao ?? '',
      cliente.dia_parcela ?? '',
      cliente.deve_receber_sms ?? '',
      cliente.deve_receber_torpedo_voz ?? '',
      cliente.criado_por ?? '',
      cliente.atualizado_por ?? '',
      cliente.religiao ?? '',
      cliente.indicacao ?? '',
    ];
  }

  // async create(cliente: ClienteModel): Promise<any> {
  //   if (!navigator.onLine) {
  //     let clientesNovos = this.localStorageService.getParse('clientesNovos');
  //     let data = await this.nativeStorageService.getParse('clientes');

  //     data = JSON.parse(data);

  //     cliente.aplicativo_id = clientesNovos.length + 1;

  //     clientesNovos.push(cliente);

  //     data = [cliente, ...data];

  //     this.localStorageService.setParse('clientesNovos', clientesNovos);
  //     this.nativeStorageService.setParse('clientes', data);

  //     return of(true).toPromise();
  //   }

  //   return this._http
  //     .post(`${environment.host}clientes`, cliente)
  //     .pipe((res) => res)
  //     .toPromise();
  // }

  createMultiples(clientes: ClienteModel[]) {
    return new Promise((resolve, reject) => {
      clientes.map((cliente) => {
        alert(JSON.stringify(cliente));
        this._http
          .post(`${environment.host}clientes`, cliente)
          .pipe(
            (res) => res,
            catchError((err) => {
              throw new Error('Erro ao salvar cliente!');
            })
          )
          .subscribe((data: any) => {
            if (data.status != '1') {
              const clientesStorage =
                this.localStorageService.getParse('clientesNovos');
              this.localStorageService.setParse(
                'clientesNovos',
                clientesStorage.filter((c) => c.cnpjcpf != cliente.cnpjcpf)
              );
            }
          });
      });
      resolve(true);
    });
  }

  async show(id: number | string, criado_em: string) {
    if (!navigator.onLine) {
      let cliente: ClienteModel;

      if (criado_em == 'aplicativo') {
        const clientes = this.localStorageService.getParse('clientesNovos');
        cliente = clientes.find((cliente) => cliente.aplicativo_id == id);
      } else {
        let data = await this.nativeStorageService.getParse('clientes');
        data = JSON.parse(data);
        cliente = data.find((cliente) => cliente.id == id);
      }

      return of({ cliente: [cliente] }).toPromise();
    }

    return this._http
      .get(`${environment.host}clientes/${id}`)
      .pipe((res) => res)
      .toPromise();
  }

  update(id: number | string, cliente: ClienteModel, criadoEm: string) {
    if (!navigator.onLine) {
      if (criadoEm == 'sistema') {
        this.salvaClienteSistema(cliente);
      }

      if (criadoEm == 'aplicativo') {
        this.salvaClienteAplicativo(cliente);
      }

      return of(true).toPromise();
    }

    return this._http
      .put(`${environment.host}clientes/${id}`, cliente)
      .pipe((res) => res)
      .toPromise();
  }

  get(pesquisa: PesquisaModel): Promise<any> {
    if (!navigator.onLine) {
      const data = this.getOffline(pesquisa);
      return of(data).toPromise();
    }

    return this._http
      .post(`${environment.host}pesquisa/avancada/clientes`, pesquisa)
      .pipe((res) => res)
      .toPromise();
  }

  sync(pesquisa: PesquisaModel): Promise<any> {
    return this._http
      .post(`${environment.host}clientes/sync`, pesquisa)
      .pipe((res) => res)
      .toPromise();
  }

  totalClientes() {
    return this._http
      .get(`${environment.host}clientes/total`)
      .pipe((res) => res);
  }

  async getOffline(pesquisa: PesquisaModel) {
    const data = await this.nativeStorageService.getParse('clientes');
    const clientes = JSON.parse(data);
    return this.getFilteredClientes(clientes, pesquisa);
  }

  getFilteredClientes(data, pesquisa: PesquisaModel): any {
    let clientes = data;
    let total = 0;

    if (pesquisa.cliente) {
      clientes = _.filter(clientes, (cliente, index) => {
        const nome = cliente.nome_fantasia;
        return nome.includes(pesquisa.cliente);
      });
    }

    clientes = _.filter(clientes, (cliente, index) => {
      total += 1;
      return index >= pesquisa.skip * 10 && index <= pesquisa.skip * 10 + 9;
    });

    clientes = clientes.sort((a, b) => a.id - b.id);

    return { clientes, total };
  }

  pesquisaCPF(cpf: string) {
    if (!navigator.onLine) {
      const clientes = this.localStorageService.getParse('clientes');
      let nome_fantasia = '';

      const cpfCadastrado = clientes.some((cliente) => {
        nome_fantasia = cliente.nome_fantasia;
        return cliente.cnpjcpf == cpf;
      });

      if (cpfCadastrado) {
        return of({
          status: 1,
          mensagem: 'CPF já cadastrado no cliente: ',
          cliente: [
            {
              nome_fantasia,
            },
          ],
        });
      }
    }

    return this._http
      .post(`${environment.host}pesquisar/cpf`, { cpf })
      .pipe((res) => res);
  }

  getProfissao(profissao: string) {
    if (!profissao.trim()) {
      return of([]);
    }

    return this._http
      .get(`${environment.host}pesquisar/profissao/obito/${profissao}`)
      .pipe((res) => res);
  }

  salvaClienteAplicativo(cliente: ClienteModel) {
    this.salvaClientes(cliente, 'aplicativo');
    this.salvaClientesNovos(cliente, 'aplicativo');
  }

  salvaClienteSistema(cliente: ClienteModel) {
    this.salvaClientes(cliente, 'sistema');
    this.salvaClientesNovos(cliente, 'sistema');
  }

  salvaClientesNovos(cliente: ClienteModel, criadoEm: string) {
    let clientes = this.localStorageService.getParse('clientesNovos');

    const key = criadoEm == 'sistema' ? 'id' : 'aplicativo_id';

    const clt = clientes.find((c) => c[key] == cliente[key]);

    clientes = this.handleClientes(cliente, clientes, key, clt);

    this.localStorageService.setParse('clientesNovos', clientes);
  }

  async salvaClientes(cliente: ClienteModel, criadoEm: string) {
    let clientes = await this.nativeStorageService.getParse('clientes');

    clientes = JSON.parse(clientes);

    const key = criadoEm == 'sistema' ? 'id' : 'aplicativo_id';

    clientes = this.handleClientes(cliente, clientes, key, true);

    this.nativeStorageService.setParse('clientes', clientes);
  }

  handleClientes(
    cliente: ClienteModel,
    clientes: ClienteModel[],
    key: string,
    clt?: any
  ) {
    if (clt) {
      clientes = clientes.map((c) => {
        if (c[key] == cliente[key]) {
          c = cliente;
        }
        return c;
      });
    } else {
      clientes = [cliente, ...clientes];
    }

    return clientes;
  }

  get observer() {
    return (this.clientes$ = this.pesquisa.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((descricao: string) => this.search(descricao))
    ));
  }

  search(cliente) {
    if (!cliente.trim()) {
      return of([]);
    }
    return this._http
      .get(`${environment.host}pesquisar/clientes/${cliente}`)
      .pipe((res) => res);
  }

  getCell(celular: ClienteModel): Observable<any> {
    if (!navigator.onLine) {
      const cliente = this.localStorageService.getParse('cliente');
      let nome_fantasia = '';

      const celularCadastrado = cliente.some((cliente) => {
        nome_fantasia = cliente.nome_fantasia;
        return cliente.calular == celular;
      });

      if (celularCadastrado) {
        return of({
          status: 1,
          mensagem: 'Número já cadastrado no cliente: ',
          cliente: [
            {
              nome_fantasia,
            },
          ],
        });
      }
    }
    return this._http
      .post(`${environment.host}/pesquisar/celular`, { celular })
      .pipe((res) => res);
  }
}
