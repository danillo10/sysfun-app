import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IDependentes } from 'src/app/pages/cliente/model/cliente.model';
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
  @Input() dependentes: IDependentes[];
  @Output() dependentesSelecionados = new EventEmitter();

  dependentes$: Observable<any>;
  dependentePesquisado = new Subject<any>();
  dependente: IDependentes;

  parentescos: SelectModel[];

  constructor(
    private dependenteService: DependentesService,
    private dateService: DateService
  ) {

  }

  ngOnInit() {
    if(this.dependentes.length == 0){
      this.firstDependente();
    }

    this.parentescos = parentescos.parentescos;

    this.getDependentes();
  }

  ngOnChanges(){
    this.emit();
  }

  adicionaDependente(){
    const dependente = this.dependenteService.add(this.dependentes);
    this.dependentes.push(dependente);
  }

  delete(dependente){
    this.dependentes = this.dependenteService.delete(dependente, this.dependentes);
    this.emit();
  }

  pesquisaDependente(dependente, nome){
    this.dependente = dependente;
    const ids = this.dependentes.map(dependente => dependente.id).filter(d => d != null);
    this.dependentePesquisado.next({nome, ids});
  }

  selecionar(dependenteSelecionado, dependente){
    dependente.pesquisados = [];
    dependente.cliente_id = dependenteSelecionado.id;
    dependente.id_dependente = dependenteSelecionado.id_dependente;
    dependente.id = dependenteSelecionado.id;
    dependente.nome = dependenteSelecionado.nome_fantasia;
    dependente.cpf = dependenteSelecionado.cnpjcpf;
    dependente.data_nasc = this.dateService.format(dependenteSelecionado.data_nascimento);
    dependente.telefone = dependenteSelecionado.celular;
    dependente.idade = dependenteSelecionado.idade;
    dependente.pessoa = dependenteSelecionado.pessoa;

    this.dependenteService.dependenteUsuario(dependente.id)
      .subscribe((data: any) => {
        if(data.cliente)
          alert("O dependente já está cadastrado no cliente " + data.cliente + " com CPF: " + data.cpf)
      })

    this.dependentePesquisado.next('');
    this.emit();
  }

  firstDependente() {
    const dependente = this.dependenteService.first();
    this.dependentes.push(dependente);
  }

  /**
   * Observable para os dependentes
  */
   getDependentes() {
    this.dependentes$ = this.dependentePesquisado.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data => this.dependenteService.get(data)),
    )

    this.dependentes$.subscribe((data) => {
      this.dependente.pesquisados = data;
    })
  }

  emit(){
    this.dependentesSelecionados.emit(this.dependentes);
  }

}