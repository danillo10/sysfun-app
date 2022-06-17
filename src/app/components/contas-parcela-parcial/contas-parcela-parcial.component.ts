import { Component, Input, OnInit } from '@angular/core';
import { ContasReceberBaixaModel } from 'src/app/pages/contas-receber/liquidar-conta/model/conta-receber-baixa.model';

@Component({
  selector: 'app-contas-parcela-parcial',
  templateUrl: './contas-parcela-parcial.component.html',
  styleUrls: ['./contas-parcela-parcial.component.scss'],
})
export class ContasParcelaParcialComponent implements OnInit {
  @Input() pagamentos: ContasReceberBaixaModel[];

  constructor() { }

  ngOnInit() {}

}
