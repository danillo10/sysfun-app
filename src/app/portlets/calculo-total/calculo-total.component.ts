import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';

import calculo from '../../pages/utils/calculo_total.json';

@Component({
  selector: 'app-portlet-calculo-total',
  templateUrl: './calculo-total.component.html',
  styleUrls: ['./calculo-total.component.scss'],
})
export class CalculoTotalComponent implements OnInit {
  @Input() form: FormControl;
  @Input() control: string;
  @Output() calculoSelecionado = new EventEmitter();

  pesquisa = {} as PesquisaModel;
  calculo: SelectModel[];

  constructor() {
    this.calculo = calculo.calculoTotal;
  }

  ngOnInit() {}

  selecionaCalculoTotal(calculo) {
    this.calculoSelecionado.emit(calculo);
  }
}
