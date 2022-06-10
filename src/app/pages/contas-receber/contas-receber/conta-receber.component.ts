import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { ContaBancariaModel } from 'src/app/shared/models/conta-bancaria.model';
import { CategoriasFinanceirasService } from 'src/app/shared/services/categorias-financeiras.service';
import { CentroCustoService } from 'src/app/shared/services/centro-custo.service';
import { ContasBancariasService } from 'src/app/shared/services/contas-bancarias.service';
import { SelectService } from 'src/app/shared/services/select.service';

import { PesquisaModel } from '../../cliente/model/pesquisa.model';
import { ClienteService } from '../../cliente/service/cliente.service';
import { IContasReceber } from '../model/contas-receber.model';
import { ContasReceberService } from '../service/contas-receber.service';

import dataTipoRegistro from '../data/tipo_registro.json';
import dataOcorrencia from '../data/ocorrencia.json';
import { FormaPagamentoService } from 'src/app/shared/services/forma-pagamento.service';

@Component({
  selector: 'app-conta-receber',
  templateUrl: './conta-receber.component.html',
  styleUrls: ['./conta-receber.component.css'],
})

export class ContaReceberComponent implements OnInit {
  @Input() form: FormGroup;

  receita: IContasReceber;
  pesquisa = {} as PesquisaModel;

  contasBancarias: ContaBancariaModel[];

  categoriasFinanceiras: SelectModel[];
  clientes: SelectModel[];
  centrosCusto: SelectModel[];
  tiposRegistro: SelectModel[];
  ocorrencias: SelectModel[];
  formaPagamento: SelectModel[];

  constructor(
    private formBuilder: FormBuilder,
    private contaReceberService: ContasReceberService,
    private contasBancariasService: ContasBancariasService,
    private categoriasFinanceirasService: CategoriasFinanceirasService,
    private clientesService: ClienteService,
    private selectService: SelectService,
    private centroCustoService: CentroCustoService,
    private formaPagamentoService: FormaPagamentoService
  ) {
    this.receita = new IContasReceber();
    this.categoriasFinanceiras = [];
    this.clientes = [];
    this.centrosCusto = [];
    this.formaPagamento = [];
    this.tiposRegistro = dataTipoRegistro.tipoRegistro;
    this.ocorrencias = dataOcorrencia.ocorrencia;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.receita.id],
      descricao: [this.receita.descricao, Validators.required],
      conta_bancaria: [this.receita.conta_bancaria, Validators.required],
      categoria: [this.receita.categoria, Validators.required],
      categoria_descricao: [this.receita.categoria_descricao],
      cliente: [this.receita.cliente, Validators.required],
      cliente_descricao: [this.receita.cliente_descricao],
      vencimento: [this.receita.vencimento, Validators.required],
      valor: [this.receita.valor, Validators.required],
      tipo_registro: [this.receita.tipo_registro, Validators.required],
      data_emissao: [this.receita.data_emissao, Validators.required],
      n_doc: [this.receita.n_doc, Validators.required],
      forma_pagamento: [this.receita.forma_pagamento, Validators.required],
      centro_custos: [this.receita.centro_custos],
      centro_custos_descricao: [this.receita.centro_custos_descricao],
      ocorrencia: [this.receita.ocorrencia],
      qtdParcelas: [this.receita.qtdParcelas],
    })

    this.getContasBancarias();
    this.getCategoriasFinanceiras();
    this.getClientes();
    this.getCentroCustos();
    this.getFormasPagamentos();
  }

  getContasBancarias(){
    this.contasBancariasService.getAll()
      .subscribe((data: ContaBancariaModel[]) => this.contasBancarias = data);
  }

  getCategoriasFinanceiras(){
    this.categoriasFinanceirasService.categorias$
      .subscribe((categoriasFinaceiras: any) => {
        this.categoriasFinanceiras = this.selectService.handleSelect(categoriasFinaceiras, 'id', 'descricao');
      })
  }

  getClientes(){
    this.clientesService.clientes$
      .subscribe((clientes: any) => {
        this.clientes = this.selectService.handleSelect(clientes, 'id', 'nome_fantasia');
      })
  }

  getCentroCustos(){
    this.centroCustoService.centro_custos$
      .subscribe((centro_custos: any) => {
        this.centrosCusto = this.selectService.handleSelect(centro_custos, 'id', 'descricao');
      })
  }

  getFormasPagamentos(){
    this.formaPagamentoService.get()
    .subscribe((formaPagamento: any)=>{
      this.formaPagamento = this.selectService.handleSelect(formaPagamento, 'id', 'descricao');
    })
  }

  pesquisaCategoria(){
    this.categoriasFinanceirasService.pesquisa.next(this.pesquisa.descricao);
  }

  pesquisaCliente(){
    this.clientesService.pesquisa.next(this.pesquisa.descricao);
  }

  pesquisaCentroCusto(){
    this.centroCustoService.pesquisa.next(this.pesquisa.descricao);
  }

  selecionaCategoria(categoria){
    this.form.patchValue({categoria: categoria.value, categoria_descricao: categoria.description});
    this.categoriasFinanceirasService.pesquisa.next('');
  }

  selecionaCliente(cliente){
    this.form.patchValue({cliente: cliente.value, cliente_descricao: cliente.description});
    this.clientesService.pesquisa.next('');
  }

  selecionaCentroCusto(centroCusto){
    this.form.patchValue({centro_custo: centroCusto.value, centro_custo_descricao: centroCusto.description});
    this.centroCustoService.pesquisa.next('');
  }

}
