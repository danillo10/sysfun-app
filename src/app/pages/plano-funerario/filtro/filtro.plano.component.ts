import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroPlanos } from './model/filtro.model';

@Component({
  selector: 'app-filtro-plano-funerario',
  templateUrl: './filtro.plano.component.html',
  styleUrls: ['./filtro.plano.component.scss'],
})
export class FiltroPlanoComponent implements OnInit {
  @Output() filtrado = new EventEmitter();
  @Input() form: FormGroup;
  
  filtrar:IFiltroPlanos;

  constructor( 
    private formBuilder: FormBuilder
  ) {
    this.filtrar = new IFiltroPlanos();
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      data_vencimento: [this.filtrar.data_vencimento],
      data_final: [this.filtrar.data_final],
      cidade: [this.filtrar.cidade],
      bairro: [this.filtrar.bairro],
      rua: [this.filtrar.rua],
      situacao: [this.filtrar.situacao],

    })
  }

  search(){
    this.filtrado.emit(true);
  }

}