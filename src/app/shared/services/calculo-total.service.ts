import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculoTotalService {
  ultimoTotal: number;
  ultimoJuros: number;
  ultimoDesconto: number;
  ultimoAcrescimo: number;

  constructor() { }

  calculaTotal(form): Promise<number> {
    let total: number = 0;
    // let valor: number = (form.valor) ? form.valor : 0;
    let juros: number = (form.juros) ? form.juros : 0;
    let desconto: number = (form.desconto) ? form.desconto : 0;
    let acrescimo: number = (form.acrescimo) ? form.acrescimo : 0;

    total = (form.valor + juros + acrescimo) - desconto;

    return of(total)
      .toPromise();
  }
}
