import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { ContaBancariaModel } from 'src/app/shared/models/conta-bancaria.model';
import { CalculoTotalService } from 'src/app/shared/services/calculo-total.service';
import { ContasBancariasService } from 'src/app/shared/services/contas-bancarias.service';
import { FormaPagamentoService } from 'src/app/shared/services/forma-pagamento.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { SelectService } from 'src/app/shared/services/select.service';
import { ContasReceberService } from '../service/contas-receber.service';

import { ContasReceberBaixaModel } from './model/conta-receber-baixa.model';
import { LiquidarService } from './service/liquidar.service';

@Component({
  selector: 'app-liquidar-conta',
  templateUrl: './liquidar-conta.component.html',
  styleUrls: ['./liquidar-conta.component.scss'],
})
export class LiquidarContaComponent implements OnInit {
  @Input() form: FormGroup;

  @Output() close = new EventEmitter();

  contasBancarias: ContaBancariaModel[];
  receber: ContasReceberBaixaModel;
  pagamentos: ContasReceberBaixaModel[];
  formaPagamento: SelectModel[];
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private liquidarService: LiquidarService,
    private formaPagamentoService: FormaPagamentoService,
    private contasBancariasService: ContasBancariasService,
    private selectService: SelectService,
    private contasReceberService: ContasReceberService,
    private calculoTotalService: CalculoTotalService,
    private loadingService: LoadingService
  ) {
      this.formaPagamento = [];
      this.pagamentos = this.liquidarService.pagamentos;
      this.receber = this.liquidarService.contaReceber;
      this.receber.status = (this.receber.pago === 1) ? true : false;
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

    this.getContasBancarias();
    this.getFormasPagamentos();
  }

  liquidar(){
    this.loading = true;
    this.loadingService.showLoading("Carregando...")
      .then(() => {
        this.contasReceberService.liquidar(this.form.value)
        .subscribe((data: any) => {
          if(data.status == 1) return alert(data.mensagem);
          this.loadingService.hideLoading();
          this.closeView(true);
          this.loading = false;
        })
      })
  }

  getContasBancarias(){
    this.contasBancariasService.getAll()
      .subscribe((data: ContaBancariaModel[]) => this.contasBancarias = data);
  }

  getFormasPagamentos(){
    this.formaPagamentoService.get()
    .subscribe((formaPagamento: any)=> {
      this.formaPagamento = this.selectService.handleSelect(formaPagamento, 'id', 'descricao');
    })
  }

  calculaTotal(){
    // this.calculoTotalService.calculaTotal()
    //   .subscribe(valor => this.form.patchValue({valor: valor}));
  }

  handleCheckbox(){
    const obs = (this.form.value.pago) ? 'Conta liquidada' : 'Baixa parcial';
    this.form.patchValue({obs});
  }

  closeView(v: boolean = false){
    this.close.emit(v);
  }

  setValor() {
    this.calculoTotalService.setForm(this.form)
    .setValor(this.form.value.valor);
  }

  setJuros() {
    this.calculoTotalService.setForm(this.form)
    .setJuros(this.form.value.juros);
  }

  setDesconto() {
    this.calculoTotalService.setForm(this.form)
    .setDesconto(this.form.value.desconto);
  }

  setAcrescimo() {
    this.calculoTotalService.setForm(this.form)
    .setAcrescimo(this.form.value.acrescimo);
  }

}
