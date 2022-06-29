import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { UtilsCalculosService } from './utils-calculos.service';

@Injectable({
  providedIn: 'root'
})
export class CalculoTotalService {
  form: FormGroup;
  ultimoTotal: number = 0;
  ultimoJuros: number = 0;
  ultimoDesconto: number = 0;
  ultimoAcrescimo: number = 0;

  constructor(
    private _utilsCalculosService: UtilsCalculosService
  ) {
  }

  setValor(valor: number) {
    this.form.patchValue({ valor: this.form.value.valor });
  }

  setJuros(juros: number) {
    let valor = this.form.value.valor -= this.ultimoJuros;
    this.form.patchValue({ valor: valor += juros });
    this.ultimoJuros = juros;
  }

  setDesconto(desconto: number) {
    let valor = this.form.value.valor += this.ultimoDesconto;
    this.form.patchValue({ valor: valor -= desconto });
    this.ultimoDesconto = desconto;
  }

  setAcrescimo(acrescimo: number) {
    let valor = this.form.value.valor -= this.ultimoAcrescimo;
    this.form.patchValue({ valor: valor += acrescimo });
    this.ultimoAcrescimo = acrescimo;
  }

  castingValor(_control, v) {
    this.form.patchValue({ _control: this._utilsCalculosService.castingToNumber(v) });
    return this;
  }

  setForm(form: FormGroup) {
    this.form = form;
    return this;
  }
}
