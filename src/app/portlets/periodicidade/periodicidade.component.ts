import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import periodicidade from '../../pages/utils/periodicidade.json'

@Component({
  selector: 'app-portlets-periodicidade',
  templateUrl: './periodicidade.component.html',
  styleUrls: ['./periodicidade.component.scss'],
})
export class PeriodicidadeComponent implements OnInit {
@Input() form: FormControl;
@Input() control: string;

pesquisa = {} as PesquisaModel;
periodicidade: SelectModel[];

  constructor() { 
    this.periodicidade = periodicidade.periodicidade;
  }

  ngOnInit() {}

  selecionaPeriodicidade(periodicidade){
    this.form.patchValue({periodicidade: periodicidade.value});
  }
}
