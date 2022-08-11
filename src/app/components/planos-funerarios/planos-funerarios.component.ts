import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { SelectModel } from '../select/model/select.model';

import parentescos from '../../pages/utils/parentescos.json';
import { DateService } from 'src/app/shared/services/date.service';
import { IPlanoFunerario } from 'src/app/pages/plano-funerario/model/plano-funerario.model';
import { PlanosFunerariosService } from 'src/app/shared/services/planos-funerarios.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-planos-funerarios',
  templateUrl: './planos-funerarios.component.html',
  styleUrls: ['./planos-funerarios.component.scss'],
})
export class PlanosFunerariosComponent implements OnInit {
  @Input() set data(planosFunerarios: IPlanoFunerario[]) {
    if (planosFunerarios.length > 0) {
      this.planosFunerarios = planosFunerarios;
    }
  }

  @Output() planosFunerariosSelecionados = new EventEmitter();
  @Output() planoFunerarioSelecionado = new EventEmitter();

  planosFunerarios$: Observable<any>;
  planosFunerarioPesquisado = new Subject<any>();
  planoFunerario: IPlanoFunerario;
  planosFunerarios: IPlanoFunerario[];

  parentescos: SelectModel[];

  constructor(
    private planosFunerariosService: PlanosFunerariosService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.parentescos = parentescos.parentescos;
    this.getPlanosFunerarios();
  }

  ngOnChanges() {
    this.emit();
  }

  adicionaPlanoFunerario() {
    const ultimoPlano = _.last(this.planosFunerarios);
    this.planosFunerarios.push(new IPlanoFunerario(ultimoPlano));
  }

  delete(planoFunerario) {
    this.planosFunerarios = this.planosFunerariosService.reorganizar(
      planoFunerario,
      this.planosFunerarios
    );
    this.emit();
  }

  pesquisaPlanosFunerario(planoFunerario) {
    this.planoFunerario = planoFunerario;
    const ids = this.planosFunerarios.map(
      (planosFunerarios) => planosFunerarios.id
    );
    this.planosFunerarioPesquisado.next({ nome: planoFunerario.nome });
  }

  selecionar(
    planoFunerarioSelecionado: IPlanoFunerario,
    planoFunerario: IPlanoFunerario
  ) {
    planoFunerario.id = planoFunerarioSelecionado.id;
    planoFunerario.nome = planoFunerarioSelecionado.nome;
    planoFunerario.valor_venda = planoFunerarioSelecionado.valor_venda;
    planoFunerario.numero = planoFunerarioSelecionado.servico_plano;
    planoFunerario.servico_id = planoFunerarioSelecionado.id;
    planoFunerario.servico_plano = planoFunerarioSelecionado.servico_plano;
    planoFunerario.servico_nome = planoFunerarioSelecionado.nome;
    planoFunerario.servico_parcelas = planoFunerarioSelecionado.qtd_parcelas;
    planoFunerario.servico_valor_unitario =
      planoFunerarioSelecionado.valor_venda;
    planoFunerario.servico_valor_total = planoFunerarioSelecionado.valor_venda;

    this.planosFunerarioPesquisado.next('');
    this.planoFunerarioSelecionado.emit(planoFunerarioSelecionado);
    this.emit();
  }

  /**
   * Observable para os planosFunerarios
   */
  getPlanosFunerarios() {
    this.planosFunerarios$ = this.planosFunerarioPesquisado.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data) => this.planosFunerariosService.get(data))
    );

    this.planosFunerarios$.subscribe((data) => {
      this.planoFunerario.pesquisados = data;
    });
  }

  emit() {
    if (this.planosFunerarios) {
      this.planosFunerariosSelecionados.emit(this.planosFunerarios);
    }
  }

  onChange(novoValor, planoFunerarioId) {
    this.planosFunerarios.find(
      (plano) => plano.id === planoFunerarioId
    ).servico_valor_total = novoValor;
    this.emit();
  }
}
