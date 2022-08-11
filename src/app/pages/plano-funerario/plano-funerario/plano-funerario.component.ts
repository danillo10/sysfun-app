import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IParcela } from 'src/app/components/parcelas/model/parcelas.model';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { DependentesService } from 'src/app/shared/services/dependentes.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { IDependentes } from '../../cliente/model/cliente.model';
import {
  IPlanoFunerario,
  PlanoFunerarioModel,
} from '../model/plano-funerario.model';
import { PlanoFunerarioService } from '../service/plano-funerario.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import { Subscription } from 'rxjs';
import { ParcelasComponent } from 'src/app/components/parcelas/parcelas.component';

@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.component.html',
  styleUrls: ['./plano-funerario.component.scss'],
})
export class PlanoFunerarioComponent implements OnInit {
  @Input() form: FormGroup;
  @ViewChild(ParcelasComponent) parcelasComponent!: any;

  plano: PlanoFunerarioModel;
  planosFunerarios: IPlanoFunerario[];
  criadoEm: string;
  edit: boolean;
  subscription: Subscription;

  calculoTotal: SelectModel[];

  constructor(
    private formBuilder: FormBuilder,
    private planoFunerarioService: PlanoFunerarioService,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
    private dependentesService: DependentesService,
    private utilsService: UtilsService,
    private router: Router
  ) {
    this.plano = new PlanoFunerarioModel();
    this.edit = false;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.plano.id],
      tipo: [this.plano.tipo],
      cliente: [this.plano.cliente],
      cliente_nome: [this.plano.cliente_nome],
      indicacao: [this.plano.indicacao],
      indicacao_nome: [this.plano.indicacao_nome],
      indicacao_parcelas: [this.plano.indicacao_parcelas],
      tipo_liberacao: [this.plano.tipo_liberacao],
      tecnico: [this.plano.tecnico],
      tecnico_nome: [this.plano.tecnico_nome],
      profissional: [this.plano.profissional],
      profissional_nome: [this.plano.profissional_nome],
      situacao: [this.plano.situacao],
      lista_preco: [this.plano.lista_preco],
      falecido: [this.plano.falecido],
      contato: [this.plano.contato],
      valor_servicos: [this.plano.valor_servicos],
      valor_produtos: [this.plano.valor_produtos],
      valor_despesas: [this.plano.valor_despesas],
      valor_desconto_v: [this.plano.valor_desconto_v],
      valor_desconto_p: [this.plano.valor_desconto_p],
      valor_bruto: [this.plano.valor_bruto],
      valor_liquido: [this.plano.valor_liquido],
      taxa_adesao: [this.plano.taxa_adesao],
      data_inicial: [this.utilsService.formatDate(this.plano.data_inicial)],
      forma_pagamento: [this.plano.forma_pagamento],
      condicao_pagamento: [this.plano.condicao_pagamento],
      qtd_parcelas: [this.plano.qtd_parcelas],
      carencia: [this.plano.carencia],
      rg_f_pendente: [this.plano.residencia_f_pendente],
      cpf_f_pendente: [this.plano.cpf_f_pendente],
      declaracao_f_pendente: [this.plano.declaracao_f_pendente],
      casamento_f_pendente: [this.plano.casamento_f_pendente],
      residencia_f_pendente: [this.plano.residencia_f_pendente],
      nascimento_f_pendente: [this.plano.nascimento_f_pendente],
      cobito_f_pendente: [this.plano.cobito_f_pendente],
      auxilio_f_pendente: [this.plano.auxilio_f_pendente],
      rg_r_pendente: [this.plano.residencia_r_pendente],
      cpf_r_pendente: [this.plano.cpf_r_pendente],
      residencia_r_pendente: [this.plano.residencia_r_pendente],
      casamento_r_pendente: [this.plano.casamento_r_pendente],
      data_os: [this.plano.data_os],
      data_entrega: [this.plano.data_entrega],
      garantia: [this.plano.garantia],
      data_realizacao: [this.plano.data_realizacao],
      hora_realizacao: [this.plano.hora_realizacao],
      referencia: [this.plano.referencia],
      obs: [this.plano.obs],
      obs_internas: [this.plano.obs_internas],
      equipamento: [this.plano.equipamento],
      problema: [this.plano.problema],
      obs_recebimento: [this.plano.obs_recebimento],
      contas_lancadas: [this.plano.contas_lancadas],
      laudo: [this.plano.laudo],
      servicos: [this.plano.servicos],
      produtos: [this.plano.produtos],
      dependentes: [this.plano.dependentes],
      parcelas: [this.plano.parcelas],
      criado_por: [this.plano.criado_por],
      atualizado_por: [this.plano.atualizado_por],
      os_gerada: [this.plano.os_gerada],
      repetir_valor: [this.plano.repetir_valor],
    });
    this.setDependentes([]);
    this.get();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  create() {
    if (this.form.value.cliente == '') return alert('Informe um cliente');

    if (this.form.value.tecnico == '') return alert('Informe um Atendente');

    if (this.form.value.servicos.length <= 0)
      return alert('Informe um produto ou serviço');

    if (this.form.value.parcelas <= 0) return alert('Gerar parcelas do plano');

    if (
      this.form.value.parcelas.some(
        (parcela) => parcela.parcela_forma_pagamento === ''
      )
    )
      return alert('Todas as parcelas devem possuir uma forma de pagamento');

    if (this.form.value.taxa_adesao == '') {
      if (!confirm('Deseja cadastrar o plano sem a taxa de adesão ?')) return;
    }

    if (this.form.value.carencia == '') {
      if (!confirm('Deseja cadastrar o plano sem informar a carência ?'))
        return;
    }

    this.loadingService.showLoading('Salvando cadastro...').then(() => {
      const id = this.activatedRoute.snapshot.paramMap.get('id');

      this.form.patchValue({ dependentes: this.plano.dependentes });

      if (id === 'new') {
        this.planoFunerarioService
          .create(this.form.value)
          .then((data: any) => {
            this.loadingService.hideLoading();
            if (data.status == 1) return alert(data.mensagem);
            this.router.navigate(['plano-funerario']);
          })
          .catch((err) => {
            alert(JSON.stringify(err));
            this.loadingService.hideLoading();
          });
      } else {
        this.planoFunerarioService
          .salvaPlanos(this.form.value, this.criadoEm)
          .then((data: any) => {
            this.loadingService.hideLoading();
            if (data.status == 1) return alert(data.mensagem);
            this.router.navigate(['plano-funerario']);
          })
          .catch((err) => {
            alert(JSON.stringify(err));
            this.loadingService.hideLoading();
          });
      }
    });
  }

  get() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.subscription = this.activatedRoute.queryParams.subscribe((data) => {
      this.criadoEm = data.aplicativo ? 'aplicativo' : 'sistema';

      if (id != 'new') {
        this.edit = true;
        this.planoFunerarioService.show(id, this.criadoEm).then((data: any) => {
          this.plano = data.planoFunerario[0];
          this.plano.dependentes = data.planoFunerarioDependentes;
          this.plano.parcelas = data.planoFunerarioParcelas;
          this.plano.servicos = data.planoFunerarioServicos;

          // Gambiarra pq n tem como corrigir o backend no momento
          this.plano.data_inicial = this.utilsService.formatDate(
            new Date(this.plano.data_inicial)
          );
          this.plano.parcelas = this.plano.parcelas.map((p: IParcela) => {
            p.parcela_data = this.utilsService.formatDate(
              new Date(p.parcela_data)
            );
            return p;
          });

          this.form.patchValue(this.plano);
        });
      }

      // if (id != 'plano-funerario') {
      //   this.loadingService.showLoading('Salvando dados...').then(() => {
      //     const id = data.aplicativo ? data.aplicativo : data.sistema;
      //     this.planoFunerarioService
      //       .salvaPlanos(id, this.criadoEm)
      //       .then((data: any) => {
      //         this.plano = new PlanoFunerarioModel(data.plano[0]);

      //         if (navigator.onLine) this.plano.dependentes = data.dependentes;

      //         this.form.patchValue(this.plano);

      //         this.loadingService.hideLoading();
      //       });
      //   });
      // }
    });
  }

  setDependentes(dependentes: IDependentes[]) {
    return (this.plano.dependentes =
      dependentes.length == 0
        ? this.dependentesService.reorganizar()
        : dependentes);
  }

  setParcelas(parcelas: IParcela[]) {
    this.form.value.parcelas = parcelas;
    this.form.patchValue(this.form.value);
  }

  alteraPlanos(planosFunerarios: IPlanoFunerario[]) {
    this.planosFunerarios = planosFunerarios;
    this.form.value.servicos = planosFunerarios;
    this.calculaValorPlano();
  }

  calculaValorPlano() {
    let valorTotal = 0;
    this.planosFunerarios.forEach((plano) => {
      valorTotal += Number(plano.servico_valor_total);
    });
    this.form.value.valor_bruto = valorTotal.toFixed(2);
    this.form.patchValue(this.form.value);
  }
}
