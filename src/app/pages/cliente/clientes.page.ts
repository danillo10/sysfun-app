import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

import { ClienteModel } from './model/cliente.model';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes: ClienteModel[];
  filtro = false;
  formulario = false;

  constructor(
    private router: Router,
    private _clienteService: ClienteService,
    private _localStorageService: LocalstorageService
  ) {
    this.clientes = [];
  }

  ngOnInit(
  ) {
    this.pesquisar()
  }

  add(){
    this.router.navigate(['clientes/novo-cliente/fornecedor']);
  }

  search(){}

  pesquisar() {
    this._clienteService.get({ registros: 10 })
      .subscribe((data: any) => {
        this.clientes = data;
      })
  }

}
