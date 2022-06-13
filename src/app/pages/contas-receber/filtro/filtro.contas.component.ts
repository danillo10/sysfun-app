import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroContas } from './model/filtro.contas.model';

@Component({
  selector: 'app-filtro-contas-receber',
  templateUrl: './filtro.contas.component.html',
  styleUrls: ['./filtro.contas.component.scss'],
})
export class FiltroContasComponent implements OnInit {
  @Output() filtrado = new EventEmitter();
  @Input() form: FormGroup;

  filtrarContas:  IFiltroContas;
  
  constructor(
    private formBuilder: FormBuilder
  ){
    this.filtrarContas = new IFiltroContas();
   }

  ngOnInit() {
   this.form = this.formBuilder.group({
    data_vencimento: [this.filtrarContas.data_vencimento],
    data_final: [this.filtrarContas.data_final],
    cidade: [this.filtrarContas.cidade],
    bairro: [this.filtrarContas.bairro],
    rua: [this.filtrarContas.rua],
    situacao: [this.filtrarContas.situacao],
    })
  }

  search(){
    this.filtrado.emit(true);
  }

}