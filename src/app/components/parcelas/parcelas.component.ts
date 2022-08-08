import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectModel } from '../select/model/select.model';

import { IParcela } from './model/parcelas.model';
import { ParcelasService } from './service/parcelas.service';

import json from '../../pages/utils/forma_pagamento.json';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.scss'],
})
export class ParcelasComponent implements OnInit {
  @Input() set data(parcelas: IParcela[]) {
    if (parcelas.length > 0) {
      this.parcelas = parcelas;
    }
  }

  @Input() valorBruto: number;
  @Input() calculoTotal: string;

  @Output() parcelasSelecionadas = new EventEmitter();

  parcelas$: Observable<any>;
  parcela: IParcela;
  parcelas: IParcela[] = [];
  formaPagamento: SelectModel[];

  constructor(private parcelasService: ParcelasService) {
    this.formaPagamento = json.formaPagamento;
  }

  ngOnInit() {}

  ngOnChanges(parcela: IParcela) {
    if (!parcela.alterada) parcela.alterada = true;

    if (this.calculoTotal === 'dividir') this.alteraValorParcelas();
  }

  emit() {
    this.parcelasSelecionadas.emit(this.parcelas);
  }

  alteraValorParcelas() {
    const qtdParcelas = this.parcelas.length;
    const valorTotal = this.valorBruto;
    let valorParcelas = 0;
    let valorParcelasAlteradas = 0;
    let qtdParcelasAlteradas = 0;

    this.parcelas.forEach((parcela) => {
      if (parcela.alterada) {
        valorParcelasAlteradas += parcela.parcela_valor;
        qtdParcelasAlteradas++;
      }
    });

    if (valorTotal > valorParcelasAlteradas) {
      valorParcelas =
        (valorTotal - valorParcelasAlteradas) /
        (qtdParcelas - qtdParcelasAlteradas);
    }

    this.parcelas.forEach((parcela) => {
      if (!parcela.alterada) parcela.parcela_valor = valorParcelas;
    });
  }
}
