import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionsheetService } from 'src/app/shared/services/actionsheet.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

import { PesquisaModel } from '../cliente/model/pesquisa.model';
import { FiltroContaService } from './filtro/service/filtro.conta.service';
import { ContasReceberBaixaModel } from './liquidar-conta/model/conta-receber-baixa.model';
import { LiquidarService } from './liquidar-conta/service/liquidar.service';
import { IContasReceber } from './model/contas-receber.model';
import { ContasReceberService } from './service/contas-receber.service';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.page.html',
  styleUrls: ['./contas-receber.page.scss'],
})
export class ContasReceberPage implements OnInit {
  adicionarConta = false;
  pesquisa = {} as PesquisaModel;
  contasReceber: IContasReceber[];
  total: number;
  filtro: boolean;
  viewLiquidar: boolean;

  constructor(
    private _router: Router,
    private _contasReceberService: ContasReceberService,
    private _localStorageService: LocalstorageService,
    private _actionSheetService: ActionsheetService,
    private _liquidarService: LiquidarService,
    private _filtroContaService: FiltroContaService
  ) {
    this.pesquisa.skip = 0;
    this.pesquisa.registros = 10;
    this.pesquisa.pagina = 1;
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.pesquisa.pagina = 1;
    this.pesquisar();
    this.getLiquidar();
  }

  add() {
    this._router.navigate(['contas-receber/receita']);
  }

  getLiquidar(){
    this._actionSheetService.liquidar$
      .subscribe((conta: IContasReceber) => {
        this._contasReceberService.dadosLiquidar(conta.id)
          .subscribe((data: any) => {
            this._liquidarService.contaAtiva = conta;
            this._liquidarService.contaReceber = new ContasReceberBaixaModel(data.conta);
            this._liquidarService.pagamentos = data.contas;
            this.viewLiquidar = true;
          })
      })
  }

  pesquisar(skip: number = 0) {
    this.pesquisa.skip = skip;

    this._contasReceberService.get(this.pesquisa)
      .then((data: any) => {
        this.contasReceber = data.contasReceber;
        this.total = data.total;
        this._filtroContaService.pesquisa = this.pesquisa;
      });
  }

  closeFilter(v: boolean) {
    if(v) {
      this.pesquisar();
    }

    this.viewLiquidar = false;
  }

}
