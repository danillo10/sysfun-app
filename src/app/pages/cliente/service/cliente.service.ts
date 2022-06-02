import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { NativeStorageService } from 'src/app/shared/services/native-storage.service';
import { environment } from 'src/environments/environment';

import { ClienteModel } from '../model/cliente.model';
import { PesquisaModel } from '../model/pesquisa.model';

import * as _ from 'lodash';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  status: boolean;
  clientes: ClienteModel[];
  total: number;

  constructor(
    private _http: HttpClient,
    private localStorageService: LocalstorageService,
    private nativeStorageService: NativeStorageService
  ) { }

  create(cliente: ClienteModel) {
    if (!navigator.onLine) {
      const clientesNovos = this.localStorageService.getParse('clientes-novos');
      const data = this.localStorageService.getParse('clientes');

      cliente.aplicativo_id = clientesNovos.length;

      clientesNovos.push(cliente);

      data.clientes = [cliente, ...data.clientes];

      this.localStorageService.setParse('clientes-novos', clientesNovos);
      this.localStorageService.setParse('clientes', data);

      return of(true);
    }

    return this._http.post(`${environment.host}clientes`, cliente)
      .pipe(res => res)
  }

  createMultiples(clientes: ClienteModel[]) {
    return new Promise((resolve, reject) => {
      clientes.map(cliente => {
        this._http.post(`${environment.host}clientes`, cliente)
          .pipe(
            res => res,
            catchError(err => { throw new Error('Erro ao salvar cliente!') }
            ))
          .subscribe((data: any) => {
            if (data.status != "1") {
              const clientesStorage = this.localStorageService.getParse('clientes-novos');
              this.localStorageService.setParse('clientes-novos', clientesStorage.filter(c => c.cnpjcpf != cliente.cnpjcpf));
            }
          })
      })
      resolve(true);
    })
  }

  async show(id: number | string, criado_em: string) {
    if (!navigator.onLine) {
      let cliente: ClienteModel;

      if (criado_em == 'aplicativo') {
        const clientes = await this.nativeStorageService.getParse('clientes-novos');
        cliente = clientes.find(cliente => cliente.aplicativo_id == id);
      } else {
        const data = await this.nativeStorageService.getParse('clientes');
        cliente = data.clientes.find(cliente => cliente.id == id);
      }

      return of({ cliente: [cliente] })
        .toPromise();
    }

    return this._http.get(`${environment.host}clientes/${id}`)
      .pipe(res => res)
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

      return of(true);
    }

    return this._http.put(`${environment.host}clientes/${id}`, cliente)
      .pipe(res => res)
  }

  get(pesquisa: PesquisaModel): Promise<any> {
    if (!navigator.onLine) {
      const data = this.getOffline(pesquisa);
      return data;
    }

    return this._http.post(`${environment.host}pesquisa/avancada/clientes`, pesquisa)
      .pipe(res => res)
      .toPromise();
  }

  sync(pesquisa: PesquisaModel): Promise<any> {
    return this._http.post(`${environment.host}clientes/sync`, pesquisa)
      .pipe(res => res)
      .toPromise();
  }

  totalClientes(){
    return this._http.get(`${environment.host}clientes/total`)
    .pipe(res => res);
  }

  async getOffline(pesquisa: PesquisaModel): Promise<any> {
    const clientes = this.nativeStorageService.getParse('clientes');
    // alert(JSON.stringify(clientes));
    const response = this.getSucessClientes(clientes, pesquisa);
    return of(response)
      .pipe(res => res)
      .toPromise();
  }

  getSucessClientes(data, pesquisa: PesquisaModel): any{
    let clientes = data.clientes;
    let total = 0;

    if (pesquisa.cliente) {
      clientes = _.filter(clientes, (cliente, index) => {
        const nome = cliente.nome_fantasia;
        return nome.includes(pesquisa.cliente);
      })
    }

    clientes = _.filter(clientes, (cliente, index) => {
      total += 1;
      return index >= pesquisa.skip * 10 && index <= (pesquisa.skip * 10) + 9;
    });

    return {clientes, total};
  }

  pesquisaCPF(cpf: string) {
    if (!navigator.onLine) {
      const clientes = this.localStorageService.getParse('clientes');
      let nome_fantasia = '';

      const cpfCadastrado = clientes.some(cliente => {
        nome_fantasia = cliente.nome_fantasia;
        return cliente.cnpjcpf == cpf
      })

      if (cpfCadastrado) {
        return of({
          status: 1,
          mensagem: 'CPF já cadastrado no cliente: ',
          cliente: [{
            nome_fantasia
          }]
        })
      }
    }

    return this._http.post(`${environment.host}pesquisar/cpf`, { cpf })
      .pipe(res => res)
  }

  getProfissao(profissao: string) {
    if (!profissao.trim()) {
      return of([]);
    }

    return this._http.get(`${environment.host}pesquisar/profissao/obito/${profissao}`)
      .pipe(res => res);
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
    let clientes = this.localStorageService.getParse('clientes-novos');

    const key = criadoEm == 'sistema' ? 'id' : 'aplicativo_id';

    const clt = clientes.find(c => c[key] == cliente[key]);

    clientes = this.handleClientes(cliente, clientes, key, clt);

    this.localStorageService.setParse('clientes-novos', clientes);
  }

  salvaClientes(cliente: ClienteModel, criadoEm: string) {
    let clientes = this.localStorageService.getParse('clientes').clientes;

    const key = criadoEm == 'sistema' ? 'id' : 'aplicativo_id';

    clientes = this.handleClientes(cliente, clientes, key, true);

    this.localStorageService.setParse('clientes', { clientes: clientes, total: clientes.length });
  }

  handleClientes(cliente: ClienteModel, clientes: ClienteModel[], key: string, clt?: any) {
    if (clt) {
      clientes = clientes.map(c => {
        if (c[key] == cliente[key]) c = cliente;
        return c;
      });
    } else {
      clientes = [cliente, ...clientes];
    }

    return clientes;
  }
}
