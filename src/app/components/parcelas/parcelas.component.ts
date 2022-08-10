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
  @Output() parcelaAlterada = new EventEmitter();

  parcelas$: Observable<any>;
  parcela: IParcela;
  parcelas: IParcela[] = [];
  formaPagamento: SelectModel[];

  constructor(private parcelasService: ParcelasService) {
    this.formaPagamento = json.formaPagamento;
  }

  ngOnInit() {}

  ngOnChanges(parcela: IParcela) {
    this.parcelaAlterada.emit(parcela);
  }

  emit() {
    this.parcelasSelecionadas.emit(this.parcelas);
  }
}
