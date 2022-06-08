import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaBancariaModel } from 'src/app/shared/models/conta-bancaria.model';
import { CategoriasClientesService } from 'src/app/shared/services/categorias-clientes.service';

import { ContasBancariasService } from 'src/app/shared/services/contas-bancarias.service';

import { IContasReceber } from '../model/contas-receber.model';
import { ContasReceberService } from '../service/contas-receber.service';


@Component({
  selector: 'app-conta-receber',
  templateUrl: './conta-receber.component.html',
  styleUrls: ['./conta-receber.component.css'],
})

export class ContaReceberComponent implements OnInit {
  @Input() form: FormGroup;

  receita: IContasReceber;

  contasBancarias: ContaBancariaModel[];
  categoriasFinanceiras: ContaBancariaModel[];

  constructor(
    private formBuilder: FormBuilder,
    private contaReceberService: ContasReceberService,
    private contasBancariasService: ContasBancariasService,
    private categoriasFinanceirasService: CategoriasClientesService
  ) {
    this.receita = new IContasReceber();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.receita.id],
      descricao: [this.receita.descricao, Validators.required],
      conta_bancaria: [this.receita.conta_bancaria, Validators.required],
      categoria: [this.receita.categoria, Validators.required],
      cliente: [this.receita.cliente, Validators.required],
      vencimento: [this.receita.vencimento, Validators.required],
      valor: [this.receita.valor, Validators.required],
      tipo_registro: [this.receita.tipo_registro, Validators.required],
      data_emissao: [this.receita.data_emissao, Validators.required],
      n_doc: [this.receita.n_doc, Validators.required],
      forma_pagamento: [this.receita.forma_pagamento, Validators.required],
      centro_custos: [this.receita.centro_custos],
      ocorrencia: [this.receita.ocorrencia],
    })

    this.getContasBancarias();
  }

  getContasBancarias(){
    this.contasBancariasService.getAll()
      .subscribe((data: ContaBancariaModel[]) => this.contasBancarias = data);
  }

  getCategoriasFinanceiras(){
    this.categoriasFinanceirasService.categorias$
      .subscribe((categoriasFinaceiras: any) => this.categoriasFinanceiras = categoriasFinaceiras)
  }

}