import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFiltroContas } from './model/filtro.contas.model';
import estados from '../../utils/estados.json';
import situacao from '../../utils/situacao-receita.json';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { FiltroContaService } from './service/filtro.conta.service';
import { PesquisaModel } from '../../cliente/model/pesquisa.model';

@Component({
  selector: 'app-filtro-contas-receber',
  templateUrl: './filtro.contas.component.html',
  styleUrls: ['./filtro.contas.component.scss'],
})
export class FiltroContasComponent implements OnInit {
  @Output() filtrado = new EventEmitter();
  @Output() close = new EventEmitter();

  @Input() form: FormGroup;

  estados: SelectModel[];
  situacao: SelectModel[];

  filtrarContas: PesquisaModel;

  constructor(
    private formBuilder: FormBuilder,
    private filtroContaService: FiltroContaService
  ){
    this.filtrarContas = (this.filtroContaService.pesquisa) ? this.filtroContaService.pesquisa : new PesquisaModel();
    this.estados = estados.estados;
    this.situacao = situacao.situacao;
   }

  ngOnInit() {
   this.form = this.formBuilder.group({
    descricao: [this.filtrarContas.descricao],
    vencimento_inicio: [this.filtrarContas.vencimento_inicio],
    vencimento_final: [this.filtrarContas.vencimento_final],
    estado: [this.filtrarContas.estado],
    cidade: [this.filtrarContas.cidade],
    bairro: [this.filtrarContas.bairro],
    endereco: [this.filtrarContas.endereco],
    situacao: [this.filtrarContas.situacao],
    skip: [this.filtrarContas.skip],
    registros: [this.filtrarContas.registros]
  })

  }

  search(){
    this.filtroContaService.pesquisa = this.form.value;
    this.filtrado.emit(this.form.value);
  }

  closeView(){
    this.close.emit(true);
  }

}
