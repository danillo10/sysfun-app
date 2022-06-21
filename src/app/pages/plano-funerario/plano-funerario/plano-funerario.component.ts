import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { IPlanoFunerario } from '../model/plano-funerario.model';
import { PlanoFunerarioService } from '../service/plano-funerario.service';

@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.component.html',
  styleUrls: ['./plano-funerario.component.scss'],
})
export class PlanoFunerarioComponent implements OnInit {
  @Input() form: FormGroup;

  plano:IPlanoFunerario;
  criadoEm: string;

  calculoTotal: SelectModel[];

  constructor(
    private formBuilder: FormBuilder,
    private planoFunerarioService: PlanoFunerarioService,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.plano = new IPlanoFunerario();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.plano.id],
      tipo:[this.plano.tipo],
      cliente: [this.plano.cliente],
      indicacao: [this.plano.indicacao],
      indicacao_parcelas: [this.plano.indicacao_parcelas],
      tipo_liberacao: [this.plano.tipo_liberacao],
      tecnico: [this.plano.tecnico],
      profissional: [this.plano.profissional],
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
      data_inicial: [this.plano.data_inicial],
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
      referencia:[this.plano.referencia],
      obs:[this.plano.obs],
      obs_internas:[this.plano.obs_internas],
      equipamento:[this.plano.equipamento],
      problema:[this.plano.problema],
      obs_recebimento: [this.plano.obs_recebimento],
      contas_lancadas: [this.plano.contas_lancadas],
      laudo: [this.plano.laudo],
      servicos: [this.plano.servicos],
      produtos: [this.plano.produtos],
      dependentes:[this.plano.dependentes],
      parcelas: [this.plano.parcelas],
      criado_por: [this.plano.criado_por],
      atualizado_por: [this.plano.atualizado_por],
      os_gerada: [this.plano.os_gerada],
      repetir_valor: [this.plano.repetir_valor]
    })
  }
  // create() {

  //   if (this.form.value.nome_fantasia == "") {
  //     return alert("Campo Nome Obrigatório!");
  //   }

  //   if (this.form.value.pessoa == 'PF' || this.form.value.pessoa == 'PO') {
  //     if (this.form.value.nome_mae == "" || this.form.value.nome_mae == null) {
  //       return alert("Nome da Mãe Obrigatório!");
  //     }

  //     if (this.form.value.sexo == "" || this.form.value.sexo == null) {
  //       return alert("Informar o sexo do cliente");
  //     }
  //   }

  //   if (this.form.value.pessoa != 'PO' && this.form.value.celular == "") {
  //     return alert("Número de celular Obrigatório!");
  //   }

  //   if (this.form.value.pessoa == 'PF') {
  //     if (this.form.value.emissor == "" || this.form.value.emissor == null) {
  //       return alert("Orgão emissor Obrigatório!");
  //     }
  //   }

  //   this.loadingService.showLoading("Salvando cadastro...")
  //     .then(() => {
  //       this.form.patchValue({ dependentes: this.cliente.dependentes });

  //       const id = this.activatedRoute.snapshot.paramMap.get('id');

  //       if (id !== 'novo-cliente') {
  //         this.clienteService.update(id, this.form.value, this.criadoEm)
  //           .then((data: any) => {
  //             this.loadingService.hideLoading();
  //             if (data.status == 1) return alert(data.mensagem);
  //             this.router.navigate(['clientes']);
  //           })
  //       } else {
  //         this.clienteService.create(this.form.value)
  //           .then((data: any) => {
  //             this.loadingService.hideLoading();
  //             if (data.status == 1) return alert(data.mensagem);
  //             this.router.navigate(['clientes']);
  //           })
  //       }
  //     })
  // }
}
