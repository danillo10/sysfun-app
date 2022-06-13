import { Injectable } from '@angular/core';
import { IContasReceber } from '../../model/contas-receber.model';

@Injectable({
  providedIn: 'root'
})
export class LiquidarService {
  contaReceber: IContasReceber;

  constructor() { }
}
