import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PesquisaModel } from '../cliente/model/pesquisa.model';
import { PlanoFunerarioService } from './service/plano-funerario.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { IPlanoFunerario } from './model/plano-funerario.model';

@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.page.html',
  styleUrls: ['./plano-funerario.page.scss'],
})
export class PlanoFunerarioPage implements OnInit {
  addPlano= false;
  pesquisa = {} as PesquisaModel;
  planosFunerarios: any[];
  total: number;

  constructor(
    private _router: Router,
    private _planoFunerarioService: PlanoFunerarioService,
    private _localStorageService: LocalstorageService
  ) {
    this.pesquisa.skip = 0;
    this.pesquisa.registros = 10;
    this.pesquisa.pagina = 1;
    this.pesquisa.descricao = '';
  }

  ngOnInit() {}

  ionViewDidEnter() {
    this.pesquisa.pagina = 1;
    this.pesquisar();
  }

  adicionarPlano(){
    this._router.navigate(['planosfunerarios/adicionar-plano']);
  }

  pesquisar(skip: number = 0) {
    this.pesquisa.skip = skip;

    this._planoFunerarioService.get(this.pesquisa)
      .then((data: any) => {
        this.planosFunerarios = data.planos;
        this.total = data.total;
      });
  }
}
