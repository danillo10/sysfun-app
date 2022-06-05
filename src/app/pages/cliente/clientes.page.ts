import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

import { ClienteModel } from './model/cliente.model';
import { PesquisaModel } from './model/pesquisa.model';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes: ClienteModel[];
  total: number;
  pesquisado: string;
  formulario = false;
  filtro = false;

  pesquisa$: Observable<any>;
  clientePesquisado = new Subject<any>();

  pesquisa = {} as PesquisaModel;

  constructor(
    private router: Router,
    private _clienteService: ClienteService,
    private _localStorageService: LocalstorageService
  ) {
    this.pesquisa.skip = 0;
    this.pesquisa.registros = 10;
    this.pesquisa.tipo_pesquisa = 'nome';
    this.pesquisa.cliente = '';
  }

  ngOnInit(){

  }

  ionViewDidEnter() {
    this.pesquisa.pagina = 1;
    this.pesquisar();
  }

  add(){
    this.router.navigate(['clientes/novo-cliente/fornecedor']);
  }

  pesquisar(skip: number = 0) {
    this.pesquisa.skip = skip;

    this._clienteService.get(this.pesquisa)
      .then((data: any) => {
        this.clientes = data.clientes;
        this.total = data.total;
      });
  }

}
