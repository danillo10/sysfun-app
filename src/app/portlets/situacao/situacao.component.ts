import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';

import situacao from '../../pages/utils/situacao.json';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.scss'],
})
export class SituacaoComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;
  @Input() tipo: 'situacao' | 'planoFunerarioSituacao';

  situacao: SelectModel[];

  constructor() {
  }

  ngOnInit() {
    this.situacao = situacao[this.tipo];
  }

}
