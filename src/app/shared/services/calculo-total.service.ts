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

  calculaTotal() {
    let total: number = 0;
    let valor: number = (this.form.value.valor) ? this.form.value.valor : 0;
    let juros: number = (this.form.value.juros) ? this.form.value.juros : 0;
    let desconto: number = (this.form.value.desconto) ? this.form.value.desconto : 0;
    let acrescimo: number = (this.form.value.acrescimo) ? this.form.value.acrescimo : 0;

    total = (valor + juros + acrescimo) - desconto;

    this.form.patchValue({valor: total});
  }

  setValor(form: FormGroup){
    this.form.patchValue({valor: this.form.value.valor});
    return this;
  }

  setJuros(form: FormGroup){
    this.form = form;
    if (!isNaN(this.form.value.juros)) {
      this.form.patchValue({valor: this.form.value.valor -= this.ultimoJuros});
      this.ultimoJuros = this.form.value.juros;
    }
    return this;
  }

  setDesconto(form: FormGroup){
    this.form = form;
    if (!isNaN(this.form.value.desconto)) {
      this.form.patchValue({valor: this.form.value.valor += this.ultimoDesconto});
      this.ultimoDesconto = this.form.value.desconto;
    }
    return this;
  }

  setAcrescimo(form: FormGroup){
    this.form = form;
    if (!isNaN(this.form.value.acrescimo)) {
      this.form.patchValue({valor: this.form.value.valor -= this.ultimoAcrescimo});
      this.ultimoAcrescimo = this.form.value.acrescimo;
    }
    return this;
  }

  castingValor(_control, v){
    this.form.patchValue({_control: this._utilsCalculosService.castingToNumber(v)});
    return this;
  }
}
