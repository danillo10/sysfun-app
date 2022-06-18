import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculoTotalService {

  constructor() { }

  calculaTotal(form): Promise<number> {
    let valor: number = (form.valor) ? form.valor : 0;
    let juros: number = (form.juros) ? form.juros : 0;
    let desconto: number = (form.desconto) ? form.desconto : 0;
    let acrescimo: number = (form.acrescimo) ? form.acrescimo : 0;

    const total = (valor + juros - desconto + acrescimo);

    return of(total)
      .toPromise();
  }
}
