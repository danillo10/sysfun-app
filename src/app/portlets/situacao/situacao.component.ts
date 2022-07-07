import { Component, Input, OnInit } from '@angular/core';
import { SelectModel } from 'src/app/components/select/model/select.model';

import situacao from '../../utils/situacao.json';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.scss'],
})
export class SituacaoComponent implements OnInit {
  @Input() tipo: 'situacao' | 'planoFunerarioSituacao';

  situacao: SelectModel[];

  constructor() {
    this.situacao = situacao[this.tipo];
  }

  ngOnInit() {}

}
