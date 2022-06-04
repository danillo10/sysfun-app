import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { StatusService } from 'src/app/shared/services/status.service';

import { ClienteModel } from '../cliente/model/cliente.model';
import { ClienteService } from '../cliente/service/cliente.service';

import exportedComponents from './dashboard-buttons.json';

import moment from 'moment';
import { NativeStorageService } from 'src/app/shared/services/native-storage.service';
import { PesquisaModel } from '../cliente/model/pesquisa.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardComponent implements OnInit {
  @Output() type: 'primary' | 'secondary';
  @Output() color: string;
  @Output() label: string;

  status: boolean;
  atualizado: boolean;
  buttons: any[];

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private localStorageService: LocalstorageService,
    private loadingService: LoadingService,
    private statusService: StatusService,
    private nativeStorageService: NativeStorageService
  ) { }

  ngOnInit() {
    this.buttons = exportedComponents.buttons;
  }

  async ionViewDidEnter() {
    if(!this.localStorageService.get('ultimaAtualizacao')){
      this.nativeStorageService.set('clientes', []);
      this.nativeStorageService.set('clientes-novos', []);
    }

    this.statusService.onNetworkChanged
      .subscribe((data: boolean) => this.status = data)

    this.atualizado = await this.nativeStorageService.getParse('clientes-novos') ? false : true;

  }

  goToView(page) {
    this.router.navigate([page]);
  }

  sincronizar() {
    if (confirm('Deseja sincronizar os dados do aplicativo ?'))
      this.status ? this.sincronizarClientes() : alert('Impossível sincronizar você está offline');
  }

  async sincronizarClientes() {
    await this.enviarClientes();
    await this.receberClientes();
  }

  enviarClientes() {
    return new Promise((resolve, reject) => {
      this.loadingService.showLoading('Enviando clientes....').then(async () => {
        const clientes = await this.nativeStorageService.getParse('clientes-novos');
        alert(clientes)
        if (clientes.length > 0) {
          await this.clienteService.createMultiples(clientes);
        }else{
          this.nativeStorageService.destroy('clientes-novos')
        }
        setTimeout(async () => {
          this.atualizado = await this.nativeStorageService.get('clientes-novos') ? false : true;
          this.loadingService.hideLoading();
          resolve(true)
        }, 2000)
      }, err => reject)
    })
  }

  receberClientes() {
    return new Promise((resolve, reject) => {
      this.loadingService.showLoading('Recebendo clientes...').then(async () => {
        const ultimaAtualizacao = this.localStorageService.get('ultimaAtualizacao');
        let clientes = await this.nativeStorageService.getParse('clientes');

        let registros = clientes.length == 0 ? 1000 : 100000;
        let skip = clientes.length == 0 ? 1000 : 0;

        if(skip == 1000){
          this.clienteService.totalClientes()
            .subscribe(async (data) => {
              let contagem = data;
              while(skip <= contagem){
                await this.getClientesSkip({ registros, ultimaAtualizacao, skip });
                skip = skip + 1000;
              }
              this.loadingService.hideLoading();
              this.localStorageService.set('ultimaAtualizacao', moment().format('YYYY-MM-DD'));
              resolve(true);
            });
        }else{
          this.clienteService.sync({ registros, ultimaAtualizacao, skip })
            .then(async (data: any) => {
              if(data.clientes.length > 0){
                const identificadores = data.clientes.map(c => {
                  return c.id;
                });

                clientes = clientes.map(clienteLocal => {
                  if(identificadores.includes(clienteLocal.id)){
                    clienteLocal = data.clientes.find(c => c.id == clienteLocal.id);
                  }
                  return clienteLocal;
                });

                this.nativeStorageService.setParse('clientes', clientes);
              }

              this.loadingService.hideLoading();
              this.localStorageService.set('ultimaAtualizacao', moment().format('YYYY-MM-DD'));
              resolve(true);
            })
        }
      })
    })
  }

  getClientesSkip({ registros, ultimaAtualizacao, skip = 0 }){
    return new Promise((resolve, reject) => {
      this.clienteService.sync({ registros, ultimaAtualizacao, skip })
      .then(async (data: any) => {

        let clientesLocal = await this.nativeStorageService.getParse('clientes');

        let clientes = Object.assign(clientesLocal);

        clientes = clientes.length > 0 ? JSON.parse(clientes) : clientes;

        data.clientes.map(cliente => clientes.push(cliente))

        this.nativeStorageService.setParse('clientes', clientes);

        resolve(true);

      }, (err) => alert(JSON.stringify(err)))
    });
  }

}
