import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroPlanos } from './model/filtro.model';
import estados from '../../utils/estados.json';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { FiltroContaService } from '../../contas-receber/filtro/service/filtro.conta.service';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';

@Component({
  selector: 'app-filtro-plano-funerario',
  templateUrl: './filtro.plano.component.html',
  styleUrls: ['./filtro.plano.component.scss'],
})
export class FiltroPlanoComponent implements OnInit {
  @Input() form: FormGroup;

  @Output() close = new EventEmitter();
  @Output() filtrado = new EventEmitter();

  filtrar: PesquisaModel;
  pesquisaModel

  estados: SelectModel[];

  constructor(
    private formBuilder: FormBuilder,
    private filtroContaService: FiltroContaService
  ) {
    this.filtrar = (this.filtroContaService.pesquisa) ? this.filtroContaService.pesquisa : new PesquisaModel();
    this.estados = estados.estados;
   }

  ngOnInit() {
    this.form = this.formBuilder.group({
      descricao: [this.filtrar.descricao],
      vencimento_inicio: [this.filtrar.vencimento_inicio],
      vencimento_final: [this.filtrar.vencimento_final],
      estado: [this.filtrar.estado],
      cidade: [this.filtrar.cidade],
      bairro: [this.filtrar.bairro],
      endereco: [this.filtrar.endereco],
      situacao: [this.filtrar.situacao],
      registros: [this.filtrar.registros]
    })
  }

  search(){
    this.filtroContaService.pesquisa = this.form.value;
    this.filtrado.emit(this.form.value);
  }

  clear(){
    this.form.reset({
      descricao: this.form.value.descricao,
      registros: this.form.value.registros,
      skip: this.form.value.skip
    })
  }

  closeView(){
    this.close.emit(true);
  }

}
