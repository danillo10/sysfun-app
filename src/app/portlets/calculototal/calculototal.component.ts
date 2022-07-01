import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';

@Component({
  selector: 'app-calculototal',
  templateUrl: './calculototal.component.html',
  styleUrls: ['./calculototal.component.scss'],
})
export class CalculototalComponent implements OnInit {
  @Input() form: FormControl;
  @Input() control:string

  pesquisa = {} as PesquisaModel;
  calculo: SelectModel[];
  
  constructor() { }

  ngOnInit() {}

  selecionaCalculoTotal(calculo){
    this.form.patchValue({calculo: calculo.value});
  }
}
