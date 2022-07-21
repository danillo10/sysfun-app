import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import pagamento from '../../pages/utils/forma_pagamento.json';

@Component({
  selector: 'app-portlet-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  @Input() form: FormControl;
  @Input() control: string;

  @Output() pagamentoSelecionado = new EventEmitter();

  pesquisa = {} as PesquisaModel;
  pagamento: SelectModel[];

  constructor() {
    this.pagamento = pagamento.formaPagamento;
  }

  ngOnInit() {}

  selecionaPagamento(pagamento) {
    this.pagamentoSelecionado.emit(pagamento);
  }
}
