import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

import calculoTotalJson from '../../../pages/utils/calculo_total.json';

@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.component.html',
  styleUrls: ['./plano-funerario.component.scss'],
})
export class PlanoFunerarioComponent implements OnInit {
  @Input() form: FormGroup;

  plano: PlanoFunerarioModel;
  criadoEm: string;

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
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.plano.id],
      tipo: [this.plano.tipo],
      cliente: [this.plano.cliente],
      nome_cliente: [this.plano.nome_cliente],
      indicacao: [this.plano.indicacao],
      nome_indicacao: [this.plano.nome_indicacao],
      indicacao_parcelas: [this.plano.indicacao_parcelas],
      tipo_liberacao: [this.plano.tipo_liberacao],
      tecnico: [this.plano.tecnico],
      nome_tecnico: [this.plano.nome_tecnico],
      profissional: [this.plano.profissional],
      nome_profissional: [this.plano.nome_profissional],
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
    // this.setParcelas([new IParcela()]);
  }

  ionViewDidEnter() {
    // this.get();
  }

  create() {
    if (this.form.value.cliente == '') {
      return alert('Campo Cliente Obrigatório!');
    }
    if (this.form.value.tecnico == '') {
      return alert('Campo Técnico 1 Obrigatório!');
    }
    if (this.form.value.profissional == '') {
      return alert('Campo Técnico 2 Obrigatório!');
    }
    if (this.form.value.id == '') {
      return alert('Número do plano Obrigatório!');
    }
    // this.loadingService.showLoading("Salvando cadastro...")
    //   .then(() => {
    //     this.form.patchValue({ dependentes: this.plano.dependentes });

    //     const id = this.activatedRoute.snapshot.paramMap.get('id');

    //     if (id !== 'novo-cliente') {
    //       this.planoFunerarioService.salvaPlanos(this.form.value,this.criadoEm)
    //         .then((data: any) => {
    //           this.loadingService.hideLoading();
    //           if (data.status == 1) return alert(data.mensagem);
    //           this.router.navigate(['plano-funerario']);
    //         })
    //     } else {
    //       this.planoFunerarioService.create(this.form.value)
    //         .then((data: any) => {
    //           this.loadingService.hideLoading();
    //           if (data.status == 1) return alert(data.mensagem);
    //           this.router.navigate(['plano-funerario']);
    //         })
    //     }
    //   })
  }

  get() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.queryParams.subscribe((data) => {
      this.criadoEm = data.aplicativo ? 'aplicativo' : 'sistema';

      if (id != 'plano-funerario') {
        this.loadingService.showLoading('Salvando dados...').then(() => {
          const id = data.aplicativo ? data.aplicativo : data.sistema;
          this.planoFunerarioService
            .salvaPlanos(id, this.criadoEm)
            .then((data: any) => {
              this.plano = new PlanoFunerarioModel(data.plano[0]);

              if (navigator.onLine) this.plano.dependentes = data.dependentes;

              this.form.patchValue(this.plano);

              this.loadingService.hideLoading();
            });
        });
      }
    });
  }

  setDependentes(dependentes: IDependentes[]) {
    this.plano.dependentes =
      dependentes.length == 0
        ? this.dependentesService.reorganizar()
        : dependentes;
  }

  setParcelas(parcelas: IParcela[]) {
    this.plano.parcelas = parcelas;
  }

  alteraValorParcelas() {
    const qtdParcelas = this.form.value.qtd_parcelas;
    const calculoTotal = this.form.value.valor_liquido;
    const valorTotal = this.form.value.valor_bruto;
    const formaPagamento = this.form.value.forma_pagamento;
    const dataAtual = new Date(
      this.utilsService.stringToDate(this.form.value.data_inicial)
    );
    const parcelas = [];

    let valorParcelas = 0;
    if (calculoTotal === 'Repetir') valorParcelas = valorTotal;
    else if (calculoTotal === 'Dividir')
      valorParcelas = valorTotal / qtdParcelas;

    for (let i = 0; i < qtdParcelas; i++) {
      let dataParcela = new Date(dataAtual.setMonth(dataAtual.getMonth() + 1));
      parcelas.push(
        new IParcela({
          id: Math.floor(Math.random() * Date.now()),
          parcela_data: this.utilsService.formatDate(dataParcela),
          parcela_valor: valorParcelas,
          parcela_forma_pagamento: formaPagamento,
        })
      );
    }
    this.form.value.parcelas = parcelas;
  }

  adicionaTaxaAdesao(e) {
    const valorTaxaAdesao = e.target.value;
    const valorTotal = (
      Number(this.form.value.valor_bruto) + Number(valorTaxaAdesao)
    ).toFixed(2);
    this.form.value.valor_bruto = valorTotal;
    this.form.value.taxa_adesao = Number(valorTaxaAdesao).toFixed(2);
    this.form.patchValue(this.form.value);
  }

  recebePlano(planoFunerarioSelecionado: IPlanoFunerario) {
    this.form.value.valor_bruto = (
      Number(this.form.value.valor_bruto) +
      Number(planoFunerarioSelecionado.valor_venda)
    ).toFixed(2);
    this.form.patchValue(this.form.value);
  }
}
