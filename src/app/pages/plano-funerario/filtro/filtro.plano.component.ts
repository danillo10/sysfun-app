import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroPlanos } from './model/filtro.model';
import estados from '../../utils/estados.json';
import { SelectModel } from 'src/app/components/select/model/select.model';

@Component({
  selector: 'app-filtro-plano-funerario',
  templateUrl: './filtro.plano.component.html',
  styleUrls: ['./filtro.plano.component.scss'],
})
export class FiltroPlanoComponent implements OnInit {
  @Input() form: FormGroup;

  @Output() close = new EventEmitter();
  @Output() filtrado = new EventEmitter();

  filtrar: IFiltroPlanos;

  estados: SelectModel[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.filtrar = new IFiltroPlanos();
    this.estados = estados.estados;
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      vencimento_inicio: [this.filtrar.vencimento_inicio],
      vencimento_final: [this.filtrar.vencimento_final],
      estado: [this.filtrar.estado],
      cidade: [this.filtrar.cidade],
      bairro: [this.filtrar.bairro],
      endereco: [this.filtrar.endereco],
      situacao: [this.filtrar.situacao],

    })
  }

  search(){
    this.filtrado.emit(true);
  }

  closeView(){
    this.close.emit(true);
  }

}
