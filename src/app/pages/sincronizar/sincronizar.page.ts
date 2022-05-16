import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

import { SincronizarService } from './service/sincronizar.service';

@Component({
  selector: 'app-sincronizar',
  templateUrl: './sincronizar.page.html',
  styleUrls: ['./sincronizar.page.scss'],
})
export class SincronizarPage implements OnInit {

  constructor(
    private _sincronizarService: SincronizarService,
    private _localStorageService: LocalstorageService
  ) { }

  ngOnInit() {
  }

  updateClientes() {
    if (confirm('Deseja sincronizar os clientes ?'))
      this.getClientes();
  }

  getClientes() {
    this._sincronizarService.clientes({ registros: 100000 })
      .then((data: any) => {
        this._localStorageService.setParse('clientes', data.clientes)
        alert(JSON.stringify(this._localStorageService.get('clientes')))
      })
  }

}
