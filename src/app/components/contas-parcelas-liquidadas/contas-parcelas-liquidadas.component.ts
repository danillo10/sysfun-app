import { Component, Input, OnInit } from '@angular/core';
import { ContasReceberBaixaModel } from 'src/app/pages/contas-receber/liquidar-conta/model/conta-receber-baixa.model';

@Component({
  selector: 'app-contas-parcelas-liquidadas',
  templateUrl: './contas-parcelas-liquidadas.component.html',
  styleUrls: ['./contas-parcelas-liquidadas.component.scss'],
})
export class ContasParcelasLiquidadasComponent implements OnInit {
  @Input() pagamentos: ContasReceberBaixaModel[];

  constructor() { }

  ngOnInit() {}

}
