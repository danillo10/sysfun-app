import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/pages/cliente/model/cliente.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { IContasReceber } from 'src/app/pages/contas-receber/model/contas-receber.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  @Input() tabela: 'tableCliente'|'tabelaContasReceber'| 'tabelaplanosFunerarios';
  @Input() nome: string;
  @Input() icon: string;
  @Input() data: ClienteModel[] | IContasReceber [];
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

  navigate(route: string, cliente: ClienteModel){
    const id = cliente.aplicativo_id ? cliente.aplicativo_id : cliente.id;
    this._router.navigate([route, id], {
      queryParams: {
        sistema: cliente.id,
        aplicativo: cliente.aplicativo_id
      }
    });
  }

  emit(){
    this.paginador.emit(this.pagina);
  }

}
