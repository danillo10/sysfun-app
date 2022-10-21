import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// import { IDependentes } from 'src/app/pages/cliente/model/cliente.model';
import { DependentesService } from 'src/app/shared/services/dependentes.service';

import { SelectModel } from '../select/model/select.model';

import parentescos from '../../pages/utils/parentescos.json';
import { DateService } from 'src/app/shared/services/date.service';

@Component({
  selector: 'app-dependentes',
  templateUrl: './dependentes.component.html',
  styleUrls: ['./dependentes.component.scss'],
})
export class DependentesComponent implements OnInit {
  subscription: Subscription;

  @Input() set data(dependentes: any[]) {
    if (dependentes.length > 0) {
      this.dependentes = dependentes;
    }
  }

  @Output() dependentesSelecionados = new EventEmitter();

  dependentes$: Observable<any>;
  dependentePesquisado = new Subject<any>();
  dependente: any;
  dependentes: any[];

  parentescos: SelectModel[];

  constructor(
    private dependenteService: DependentesService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.parentescos = parentescos.parentescos;
    this.getDependentes();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnChanges() {
    this.emit();
  }

  adicionaDependente() {
    const dependente = this.dependenteService.add(this.dependentes);
    this.dependentes.push(dependente);
  }

  delete(dependente) {
    if (dependente.id) {
      if (
        confirm(
          'Deseja excluir o dependente selecionado ? Esta ação é irreversível.'
        )
      ) {
        return this.subscription = this.dependenteService
          .delete(dependente)
          .subscribe((data: any) => {
            this.dependentes = this.dependenteService.reorganizar(
              dependente,
              this.dependentes
            );
            this.emit();
          });
      }
    }
    this.dependentes = this.dependenteService.reorganizar(
      dependente,
      this.dependentes
    );
  }

  pesquisaDependente(dependente, nome) {
    this.dependente = dependente;
    const ids = this.dependentes
      .map((dependente) => dependente.id)
      .filter((d) => d != null);
    this.dependentePesquisado.next({ nome, ids });
  }

  selecionar(dependenteSelecionado, dependente) {
    dependente.pesquisados = [];
    dependente.cliente_id = dependenteSelecionado.id;
    dependente.id_dependente = dependenteSelecionado.id_dependente;
    dependente.id = dependenteSelecionado.id;
    dependente.nome = dependenteSelecionado.nome_fantasia;
    dependente.cpf = dependenteSelecionado.cnpjcpf;
    dependente.data_nasc = dependenteSelecionado.data_nascimento;
    dependente.telefone = dependenteSelecionado.celular;
    dependente.idade = dependenteSelecionado.idade;
    dependente.pessoa = dependenteSelecionado.pessoa;

    this.subscription = this.dependenteService
      .dependenteUsuario(dependente.id)
      .subscribe((data: any) => {
        if (data.cliente)
          alert(
            'O dependente já está cadastrado no cliente ' +
              data.cliente +
              ' com CPF: ' +
              data.cpf
          );
      });

    this.dependentePesquisado.next('');
    this.emit();
  }

  /**
   * Observable para os dependentes
   */
  getDependentes() {
    this.dependentes$ = this.dependentePesquisado.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data) => this.dependenteService.get(data))
    );

    this.subscription = this.dependentes$.subscribe((data) => {
      this.dependente.pesquisados = data;
    });
  }

  emit() {
    this.dependentesSelecionados.emit(this.dependentes);
  }
}
