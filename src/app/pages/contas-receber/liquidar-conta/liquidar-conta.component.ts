import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContasReceberBaixaModel } from '../model/conta-receber-baixa.model';
import { LiquidarService } from './liquidar.service';

@Component({
  selector: 'app-liquidar-conta',
  templateUrl: './liquidar-conta.component.html',
  styleUrls: ['./liquidar-conta.component.scss'],
})
export class LiquidarContaComponent implements OnInit {
  @Input() form: FormGroup;

  receber: ContasReceberBaixaModel

  constructor(
    private formBuilder: FormBuilder,
    private liquidarService: LiquidarService
  ) {
    this.receber = new ContasReceberBaixaModel();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.receber.id],
      descricao: [this.receber.descricao],
      cliente: [this.receber.cliente],
      nome_fantasia: [this.receber.nome_fantasia],
      data_liquidacao: [this.receber.data_liquidacao],
      conta_bancaria: [this.receber.conta_bancaria],
      forma_pagamento: [this.receber.forma_pagamento],
      forma_descricao: [this.receber.forma_descricao],
      valor:[this.receber.valor],
      juros:[this.receber.juros],
      desconto: [this.receber.desconto],
      acrescimo: [this.receber.acrescimo],
      obs: [this.receber.obs],
      pago: [this.receber.pago],
      situacao: [this.receber.situacao]
    })
  }


}
