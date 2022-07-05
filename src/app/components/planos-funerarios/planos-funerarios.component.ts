import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { SelectModel } from '../select/model/select.model';

import parentescos from '../../pages/utils/parentescos.json';
import { DateService } from 'src/app/shared/services/date.service';
import { IPlanoFunerario } from 'src/app/pages/plano-funerario/model/plano-funerario.model';
import { PlanosFunerariosService } from 'src/app/shared/services/planos-funerarios.service';

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

  planosFunerarios$: Observable<any>;
  planosFunerarioPesquisado = new Subject<any>();
  planosFunerario: IPlanoFunerario;
  planosFunerarios: IPlanoFunerario[];

  parentescos: SelectModel[];

  constructor(
    private planosFunerariosService: PlanosFunerariosService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.parentescos = parentescos.parentescos;
    this.planosFunerarios = [new IPlanoFunerario()];
  }

  ngOnChanges() {
    this.emit();
  }

  adicionaPlanoFunerario() {
    this.planosFunerarios.push(new IPlanoFunerario());
  }

  delete(planosFunerario) {
    if (planosFunerario.id) {
      if (
        confirm(
          'Deseja excluir o serviço selecionado ? Esta ação é irreversível.'
        )
      ) {
        return this.planosFunerarios.filter((d) => d.id != planosFunerario.id);
      }
    }
    // this.planosFunerarios = this.planosFunerarioService.reorganizar(
    //   planosFunerario,
    //   this.planosFunerarios
    // );
  }

  pesquisaPlanosFunerario(planosFunerario, nome) {
    this.planosFunerario = planosFunerario;
    const ids = this.planosFunerarios
      .map((planosFunerario) => planosFunerario.id)
      .filter((d) => d != null);
    this.planosFunerarioPesquisado.next({ nome, ids });
  }

  // selecionar(planosFunerarioSelecionado, planosFunerario) {
  //   planosFunerario.pesquisados = [];
  //   planosFunerario.cliente_id = planosFunerarioSelecionado.id;
  //   planosFunerario.id_planosFunerario =
  //     planosFunerarioSelecionado.id_planosFunerario;
  //   planosFunerario.id = planosFunerarioSelecionado.id;
  //   planosFunerario.nome = planosFunerarioSelecionado.nome_fantasia;
  //   planosFunerario.cpf = planosFunerarioSelecionado.cnpjcpf;
  //   planosFunerario.data_nasc = this.dateService.format(
  //     planosFunerarioSelecionado.data_nascimento
  //   );
  //   planosFunerario.telefone = planosFunerarioSelecionado.celular;
  //   planosFunerario.idade = planosFunerarioSelecionado.idade;
  //   planosFunerario.pessoa = planosFunerarioSelecionado.pessoa;

  //   this.planosFunerarioService
  //     .planosFunerarioUsuario(planosFunerario.id)
  //     .subscribe((data: any) => {
  //       if (data.cliente)
  //         alert(
  //           'O planosFunerario já está cadastrado no cliente ' +
  //             data.cliente +
  //             ' com CPF: ' +
  //             data.cpf
  //         );
  //     });

  //   this.planosFunerarioPesquisado.next('');
  //   this.emit();
  // }

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
      console.log('PIPE');
      console.log(data);
      // this.planosFunerario.pesquisados = data;
    });
  }

  emit() {
    this.planosFunerariosSelecionados.emit(this.planosFunerarios);
  }
}
