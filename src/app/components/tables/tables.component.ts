import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  @Input() tabela: 'tableCliente'|'tabelaContasReceber'| 'tabelaplanosFunerarios';
  @Input() nome: string;
  @Input() icon: string;

  clientes= [
    {id:34432, nome: 'yan carlos nobrega'},
    {id:23455, nome:'Flaviana bezzera de araujo'},
    {id:4345, nome:'Gael santos bastos'},
    {id:3542, nome:'Fernando de souza e silva'},
    {id:3542, nome:'Fernando de souza e silva'},
    {id:3542, nome:'Fernando de souza e silva'}
  ];

  constructor() { }

  ngOnInit() {}

}
