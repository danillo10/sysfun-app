import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import moment from 'moment';

import { IContasReceber } from 'src/app/pages/contas-receber/model/contas-receber.model';
import { ModalReciboService } from './service/modal-recibo.service';

@Component({
  selector: 'app-modal-recibo',
  templateUrl: './modal-recibo.component.html',
  styleUrls: ['./modal-recibo.component.scss'],
})
export class ModalReciboComponent implements OnInit {
  form: FormGroup;
  viewRecibo: boolean;
  dataHoje: any;
  contaRecebida: any;
  contasRecebidas: any[];
  total: number;

  @Input() conta: IContasReceber;

  constructor(
    private formBuilder: FormBuilder,
    private modalReciboService: ModalReciboService
  ) {
    this.total = 0;
    this.viewRecibo = false;
    this.dataHoje = moment().format('DD/MM/YYYY HH:mm:ss');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'data': [moment().format('DD/MM/YYYY'), Validators.required],
      'valor': [this.conta.valor, Validators.required],
      'mensagem': [null, Validators.required]
    })
  }

  imprimir() {
    this.viewRecibo = true;
    this.modalReciboService.imprimir(this.conta)
      .subscribe((data: any) => {
        this.contaRecebida = data.conta;
        this.contasRecebidas = data.contas;
        this.calculaTotal();
      })
  }

  calculaTotal(){
    this.contasRecebidas.map(c => this.total += c.valor);
  }

}
