import { Injectable } from '@angular/core';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { IFiltroContas } from '../model/filtro.contas.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroContaService {
  pesquisa: IFiltroContas;

  constructor() {

  }
}
