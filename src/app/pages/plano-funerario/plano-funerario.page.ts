import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PesquisaModel } from '../cliente/model/pesquisa.model';
import { PlanoFunerarioService } from './service/plano-funerario.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { IPlanoFunerario } from './model/plano-funerario.model';
import { FiltroContaService } from '../contas-receber/filtro/service/filtro.conta.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.page.html',
  styleUrls: ['./plano-funerario.page.scss'],
})
export class PlanoFunerarioPage implements OnInit {
  addPlano = false;
  pesquisa = {} as PesquisaModel;
  planosFunerarios: any[];
  total: number;
  filtro: boolean;

  constructor(
    private _router: Router,
    private _planoFunerarioService: PlanoFunerarioService,
    private _localStorageService: LocalstorageService,
    private _filtroContaService: FiltroContaService,
    private _utilsService: UtilsService,
    private _loadingService: LoadingService
  ) {
    this.pesquisa.skip = 0;
    this.pesquisa.registros = 10;
    this.pesquisa.pagina = 1;
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.pesquisa.pagina = 1;
    this.pesquisar();
  }

  add() {
    this._router.navigate(['plano-funerario/new']);
  }

  pesquisar(skip: number = 0) {
    this._loadingService
      .showLoading('Carregando...')
      .then(() => {
        this.pesquisa.skip = skip;

        this._planoFunerarioService.get(this.pesquisa).then((data: any) => {
          this.planosFunerarios = this._utilsService.removeDuplicates(
            data.planos,
            'id'
          );
          this.total = data.total;
          this._filtroContaService.pesquisa = this.pesquisa;
          this._loadingService.hideLoading();
        });
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        this._loadingService.hideLoading();
      });
  }
}
