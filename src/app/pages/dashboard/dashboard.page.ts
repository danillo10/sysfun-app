import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { NativeStorageService } from 'src/app/shared/services/native-storage.service';
import { StatusService } from 'src/app/shared/services/status.service';

import { ClienteService } from '../cliente/service/cliente.service';
import exportedComponents from './dashboard-buttons.json';

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
    if (!this.localStorageService.get('ultimaAtualizacao')) {
      this.nativeStorageService.setParse('clientes', []);
      this.localStorageService.setParse('clientesNovos', []);
    }

    this.statusService.onNetworkChanged
      .subscribe((data: boolean) => this.status = data)

    this.atualizado = this.localStorageService.getParse('clientesNovos') ? false : true;

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
        const clientes = this.localStorageService.getParse('clientesNovos');
        if (clientes.length > 0) {
          await this.clienteService.createMultiples(clientes);
        }

        setTimeout(async () => {
          this.atualizado = clientes.length > 0 ? false : true;
          this.loadingService.hideLoading();
          resolve(true)
        }, 2000)
      }, err => reject)
    })
  }

  receberClientes() {
    return new Promise((resolve, reject) => {
      this.loadingService.showLoading('Recebendo clientes...').then(async () => {
        await this.removeClientesSync();
        const ultimaAtualizacao = this.localStorageService.get('ultimaAtualizacao');
        let clientes = await this.nativeStorageService.getParse('clientes');

        clientes = JSON.parse(clientes);

        let registros = clientes.length == 0 ? 1000 : 100000;
        let skip = clientes.length == 0 ? 1000 : 0;

        if (skip == 1000) {
          this.clienteService.totalClientes()
            .subscribe(async (data) => {
              let contagem = data;
              while (skip <= contagem) {
                await this.getClientesSkip({ registros, ultimaAtualizacao, skip });
                skip = skip + 1000;
              }
              this.loadingService.hideLoading();
              this.localStorageService.set('ultimaAtualizacao', moment().format('YYYY-MM-DD'));
              resolve(true);
            });
        } else {
          this.clienteService.sync({ registros, ultimaAtualizacao, skip })
            .then(async (data: any) => {
              if (data.clientes.length > 0) {
                const identificadores = data.clientes.map(c => {
                  return c.id;
                });

                clientes = clientes.map(clienteLocal => {
                  if (identificadores.includes(clienteLocal.id)) {
                    clienteLocal = data.clientes.find(c => c.cnpjcpf == clienteLocal.cnpjcpf);
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

  getClientesSkip({ registros, ultimaAtualizacao, skip = 0 }) {
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

  removeClientesSync() {
    return new Promise(async (resolve, reject) => {
      let clientes = await this.nativeStorageService.getParse('clientes');
      clientes = JSON.parse(clientes);

      clientes = clientes.filter(cliente => cliente.id != false);

      this.nativeStorageService.destroy('clientes');

      this.nativeStorageService.setParse('clientes', clientes);

      resolve(true);
    })
  }

}
