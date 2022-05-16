import { Component, Input, OnInit } from '@angular/core';
import { ClienteModel } from 'src/app/pages/cliente/model/cliente.model';

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

  constructor() { }

  ngOnInit() {}

}
