import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import json from '../../pages/utils/calculo_total.json';

@Component({
  selector: 'app-portlet-calculo-total',
  templateUrl: './calculo-total.component.html',
  styleUrls: ['./calculo-total.component.scss'],
})
export class CalculoTotalComponent implements OnInit {
  @Input() form: FormControl;
  @Input() control: string;

  pesquisa = {} as PesquisaModel;
  calculo: SelectModel[];

  constructor() {
    this.calculo = json.calculoTotal;
  }

  ngOnInit() {}

  selecionaCalculoTotal(calculo) {
    this.form.patchValue({ calculo: calculo.value });
  }
}
