import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ContasReceberService } from './service/contas-receber.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { PesquisaModel } from '../cliente/model/pesquisa.model';
import { IContasReceber } from './model/contas-receber.model';
import { ActionsheetService } from 'src/app/shared/services/actionsheet.service';
import { LiquidarService } from './liquidar-conta/service/liquidar.service';

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
    private _liquidarService: LiquidarService
  ) {
    this.pesquisa.skip = 0;
    this.pesquisa.registros = 10;
    this.pesquisa.pagina = 1;
    this.pesquisa.descricao = '';
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
        this.viewLiquidar = true;
        this._liquidarService.contaReceber = conta;
      })
  }

  pesquisar(skip: number = 0) {
    this.pesquisa.skip = skip;

    this._contasReceberService.get(this.pesquisa)
      .then((data: any) => {
        this.contasReceber = data.contasReceber;
        this.total = data.total;
      });
  }

}
