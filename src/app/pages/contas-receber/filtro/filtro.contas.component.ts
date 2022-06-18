import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroContas } from './model/filtro.contas.model';
import estados from '../../utils/estados.json';
import { SelectModel } from 'src/app/components/select/model/select.model';

@Component({
  selector: 'app-filtro-contas-receber',
  templateUrl: './filtro.contas.component.html',
  styleUrls: ['./filtro.contas.component.scss'],
})
export class FiltroContasComponent implements OnInit {
  @Output() filtrado = new EventEmitter();
  @Input() form: FormGroup;

  estados: SelectModel[];

  filtrarContas:  IFiltroContas;

  constructor(
    private formBuilder: FormBuilder
  ){
    this.filtrarContas = new IFiltroContas();
    this.estados = estados.estados;
   }

  ngOnInit() {
   this.form = this.formBuilder.group({
    data_vencimento: [this.filtrarContas.data_vencimento],
    data_final: [this.filtrarContas.data_final],
    estado: [this.filtrarContas.estado],
    cidade: [this.filtrarContas.cidade],
    bairro: [this.filtrarContas.bairro],
    endereco: [this.filtrarContas.endereco],
    situacao: [this.filtrarContas.situacao],
    })

    this.form.patchValue({estado: 'MA'})
  }

  search(){
    this.filtrado.emit(true);
  }

}
