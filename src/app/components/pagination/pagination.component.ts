import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  paginas: number[];
  pagina: number;

  @Output() paginadorEmitter = new EventEmitter();

  constructor() {
    this.pagina = 1;
  }

  ngOnInit() {

  }

}
