import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PesquisaModel } from '../cliente/model/pesquisa.model';
import { IContasReceber } from '../contas-receber/model/contas-receber.model';
import { PlanoFunerarioService } from './service/plano-funerario.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.page.html',
  styleUrls: ['./plano-funerario.page.scss'],
})
export class PlanoFunerarioComponent implements OnInit {
  addPlano= false;
  pesquisa = {} as PesquisaModel;
  PlanosFunerarios: IContasReceber[];
  total: number;

  constructor(
    private _router: Router,
    private _planoFunerarioService: PlanoFunerarioService,
    private _localStorageService: LocalstorageService
  ) {
    this.pesquisa.skip = 0;
    // this.pesquisa.registros = 10;
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
        this.PlanosFunerarios = data.planosfunerarios;
        this.total = data.total;
      });
  }
}
