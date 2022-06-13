import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroClientes } from './model/filtro.cliente.model';

@Component({
  selector: 'app-filtro-cliente',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  @Output() filtrado = new EventEmitter();
  @Input() form: FormGroup;

  filtrarClientes:  IFiltroClientes;
  
  constructor(
    private formBuilder: FormBuilder
  ){
    this.filtrarClientes = new IFiltroClientes();
   }

  ngOnInit() {
   this.form = this.formBuilder.group({
    data_vencimento: [this.filtrarClientes.data_vencimento],
    data_final: [this.filtrarClientes.data_final],
    cidade: [this.filtrarClientes.cidade],
    bairro: [this.filtrarClientes.bairro],
    rua: [this.filtrarClientes.rua],
    situacao: [this.filtrarClientes.situacao],
    })
  }

  search(){
    this.filtrado.emit(true);
  }

}
