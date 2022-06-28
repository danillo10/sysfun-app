import { Injectable } from '@angular/core';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroContaService {
  pesquisa: PesquisaModel;

  constructor() {

  }

}
