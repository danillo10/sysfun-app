import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { IContasReceber } from "../model/contas-receber.model";
import { ContasReceberService } from "../service/contas-receber.service";


@Component({
  selector: 'app-conta-receber',
  templateUrl: './conta-receber.component.html',
  styleUrls: ['./conta-receber.component.css'],
})

export class ContaReceberComponent implements OnInit {
  @Input() form: FormGroup;

  receita: IContasReceber;

  constructor(
    private formBuilder: FormBuilder,
    private contaReceberService: ContasReceberService,
  ) {
    this.receita = new IContasReceber();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.receita.id],
      descricao: [this.receita.descricao],
      conta_bancaria: [this.receita.conta_bancaria],
      categoria: [this.receita.categoria],
      cliente: [this.receita.cliente],
      vencimento: [this.receita.vencimento],
      valor: [this.receita.valor],
      tipo_registro: [this.receita.tipo_registro],
      data_emissao: [this.receita.data_emissao],
      n_doc: [this.receita.n_doc],
      forma_pagamento: [this.receita.forma_pagamento],
      centro_custos: [this.receita.centro_custos],
      ocorrencia: [this.receita.ocorrencia],
    })
  }

}