import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/pages/cliente/model/cliente.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  @Input() tabela: 'tableCliente'|'tabelaContasReceber'| 'tabelaplanosFunerarios';
  @Input() nome: string;
  @Input() icon: string;
  @Input() clientes: ClienteModel[];
  @Input() total: number;
  @Input() pesquisa: PesquisaModel;

  pagina: number;

  @Output() paginador = new EventEmitter();

  constructor(
    private _router: Router
  ) {
    this.pagina = 1;
  }

  ngOnInit() {

  }

  navigate(route: string, id: number){
    this._router.navigate([route + id]);
  }

  emit(){
    this.paginador.emit(this.pagina);
  }

}
