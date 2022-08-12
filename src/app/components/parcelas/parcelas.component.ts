import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { IParcela } from './model/parcelas.model';
import { ParcelasService } from './service/parcelas.service';

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
  @Input() formaPagamento: string;
  @Input() dataInicial: any;

  @Output() parcelasSelecionadas = new EventEmitter();

  parcelas$: Observable<any>;
  parcela: IParcela;
  parcelas: IParcela[] = [];

  constructor(
    private parcelasService: ParcelasService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {}

  ngOnChanges(parcela: IParcela) {
    this.alteraParcela(parcela);
  }

  emit() {
    if (this.parcelas) this.parcelasSelecionadas.emit(this.parcelas);
  }

  alteraParcela(parcela) {
    const index = this.parcelas.findIndex((obj) => obj.id == parcela.id);
    this.parcelas[index] = parcela;
    this.parcelas[index].alterada = true;
    this.emit();

    if (this.calculoTotal === 'dividir') this.alteraValorParcelas();
  }

  alteraValorParcelas() {
    const qtdParcelas = this.parcelas.length;

    let valorParcelas = 0;
    let valorParcelasAlteradas = 0;
    let qtdParcelasAlteradas = 0;

    this.parcelas.forEach((parcela) => {
      if (parcela.alterada) {
        valorParcelasAlteradas += parcela.parcela_valor;
        qtdParcelasAlteradas++;
      }
    });

    if (this.valorBruto > valorParcelasAlteradas) {
      valorParcelas =
        (this.valorBruto - valorParcelasAlteradas) /
        (qtdParcelas - qtdParcelasAlteradas);
    }

    this.parcelas.forEach((parcela) => {
      if (!parcela.alterada) parcela.parcela_valor = valorParcelas;
    });

    this.emit();
  }

  geraParcelas(qtdParcelas) {
    const dataAtual = new Date(
      this.utilsService.stringToDate(this.dataInicial)
    );
    this.parcelas = [];

    let valorParcelas = 0;
    if (this.calculoTotal === 'repetir') valorParcelas = this.valorBruto;
    else if (this.calculoTotal === 'dividir')
      valorParcelas = this.valorBruto / qtdParcelas;

    for (let i = 0; i < qtdParcelas; i++) {
      let dataParcela = moment(dataAtual).add(i, 'M').format('DD/MM/YYYY');
      this.parcelas.push(
        new IParcela({
          id: Math.floor(Math.random() * Date.now()),
          parcela_numero: i + 1,
          parcela_data: dataParcela,
          parcela_valor: valorParcelas,
          parcela_forma_pagamento: this.formaPagamento,
        })
      );
    }

    this.emit();
  }
}
