import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { CepModel } from 'src/app/shared/models/cep.model';
import { AdressService } from 'src/app/shared/services/adress.service';
import { CategoriasClientesService } from 'src/app/shared/services/categorias-clientes.service';
import { SelectService } from 'src/app/shared/services/select.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

import basicas from '../../utils/basicas.json';
import estadocivil from '../../utils/estado_civil.json';
import estados from '../../utils/estados.json';
import generos from '../../utils/generos.json';
import messages from '../../utils/messages.json';
import pessoas from '../../utils/pessoas.json';
import situacao from '../../utils/situacao.json';
import cadastros from '../../utils/tipo_cadastro.json';
import tipoendereco from '../../utils/tipo_endereco.json';

import { ClienteModel, IDependentes } from '../model/cliente.model';
import { ClienteService } from '../service/cliente.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { DependentesService } from 'src/app/shared/services/dependentes.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { AuthService } from 'src/app/shared/services/auth.service';

interface Clipboard {
  writeText(newClipText: string): Promise<void>;
}

interface NavigatorClipboard {
  readonly clipboard?: Clipboard;
}

interface Navigator extends NavigatorClipboard { }

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  @Input() form: FormGroup;

  cliente: ClienteModel;
  pessoas: SelectModel[];
  estados: SelectModel[];
  cadastros: SelectModel[];
  generos: SelectModel[];
  estadocivil: SelectModel[];
  basicas: SelectModel[];
  tipocadastro: SelectModel[];
  tipoendereco: SelectModel[];
  situacao: SelectModel[];
  profissoes: SelectModel[];
  categorias: SelectModel[];

  dependentesCopiados: string;
  enderecos: boolean;
  criadoEm: string;
  subscription: Subscription;

  profissao$: Observable<any>;
  profissaoPesquisada = new Subject<any>();

  unsubscribeAll = new Subject<any>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adressService: AdressService,
    private clienteService: ClienteService,
    private dependentesService: DependentesService,
    private categoriaClienteService: CategoriasClientesService,
    private selectService: SelectService,
    private socialSharing: SocialSharing,
    private utilsService: UtilsService,
    private localStorageService: LocalstorageService,
    private loadingService: LoadingService,
    private authService: AuthService,
  ) {
    this.cliente = new ClienteModel();
    this.pessoas = pessoas.pessoas;
    this.estados = estados.estados;
    this.cadastros = cadastros.tipocadastro;
    this.generos = generos.generos;
    this.estadocivil = estadocivil.estadocivil;
    this.basicas = basicas.basicas;
    this.tipoendereco = tipoendereco.tipoendereco;
    this.situacao = situacao.situacao;
    this.profissoes = [];
    this.categorias = [];
    this.enderecos = false;

    this.get();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [this.cliente.id],
      aplicativo: [this.cliente.aplicativo],
      aplicativo_id: [this.cliente.aplicativo],
      responsavel: [this.cliente.responsavel],
      situacao: [this.cliente.situacao],
      categoria: [this.cliente.categoria],
      pessoa: [this.cliente.pessoa],
      cnpjcpf: [this.cliente.cnpjcpf, Validators.required],
      cnpj: [this.cliente.cnpj],
      cpf: [this.cliente.cpf],
      rg: [this.cliente.rg],
      emissor: [this.cliente.emissor],
      naturalidade: [this.cliente.naturalidade],
      nome_fantasia: [this.cliente.nome_fantasia, Validators.required],
      razao_social: [this.cliente.razao_social],
      data_nascimento: [this.cliente.data_nascimento],
      idade: [this.cliente.idade],
      sexo: [this.cliente.sexo],
      estado_civil: [this.cliente.estado_civil],
      nome_pai: [this.cliente.nome_pai],
      nome_mae: [this.cliente.nome_mae],
      inscricao_municipal: [this.cliente.inscricao_municipal],
      inscricao_estadual: [this.cliente.inscricao_estadual],
      cep: [this.cliente.cep],
      endereco: [this.cliente.endereco],
      numero: [this.cliente.numero],
      complemento: [this.cliente.complemento],
      bairro: [this.cliente.bairro],
      cidade: [this.cliente.cidade],
      ibge: [this.cliente.ibge],
      estado: [this.cliente.estado],
      telefone: [this.cliente.telefone],
      celular: [this.cliente.celular],
      whatsapp: [this.cliente.whatsapp],
      email: [this.cliente.email],
      obs: [this.cliente.obs],
      tipo_cadastro: [this.cliente.tipo_cadastro],
      local_obito: [this.cliente.local_obito],
      motivo_obito: [this.cliente.motivo_obito],
      data_obito: [this.cliente.data_obito],
      data_atestado: [this.cliente.data_atestado],
      profissao: [this.cliente.profissao],
      cep_obito: [this.cliente.cep_obito],
      endereco_obito: [this.cliente.endereco_obito],
      numero_obito: [this.cliente.numero_obito],
      complemento_obito: [this.cliente.complemento_obito],
      bairro_obito: [this.cliente.bairro_obito],
      cidade_obito: [this.cliente.cidade_obito],
      estado_obito: [this.cliente.estado_obito],
      cNome: [this.cliente.cNome],
      cNascimento: [this.cliente.cNascimento],
      cTelefone: [this.cliente.cTelefone],
      cRamal: [this.cliente.cRamal],
      cFax: [this.cliente.cFax],
      cCelular: [this.cliente.cCelular],
      cEmail: [this.cliente.cEmail],
      cWebsite: [this.cliente.cWebsite],
      eTipo_endereco: [this.cliente.eTipo_endereco],
      eTipo_pessoa: [this.cliente.eTipo_pessoa],
      eCnpjcpf: [this.cliente.eCnpjcpf],
      eCnpj: [this.cliente.eCnpj],
      eCpf: [this.cliente.eCpf],
      eCep: [this.cliente.eCep],
      eEndereco: [this.cliente.eEndereco],
      eBairro: [this.cliente.eBairro],
      eNumero: [this.cliente.eNumero],
      eComplemento: [this.cliente.eComplemento],
      eCidade: [this.cliente.eCidade],
      eEstado: [this.cliente.eEstado],
      lista_preco: [this.cliente.lista_preco],
      condicao_pagamento: [this.cliente.condicao_pagamento],
      limite_credito: [this.cliente.limite_credito],
      limite_ultrapassar: [this.cliente.limite_ultrapassar],
      conta_bancaria: [this.cliente.conta_bancaria],
      data_inicial: [this.cliente.data_inicial],
      data_final: [this.cliente.data_final],
      data_cadastro: [this.cliente.data_cadastro],
      hora_cadastro: [this.cliente.hora_cadastro],
      deve_receber_sms: [this.cliente.deve_receber_sms],
      deve_receber_torpedo_voz: [this.cliente.deve_receber_torpedo_voz],
      criado_por: [this.cliente.criado_por],
      atualizado_por: [this.cliente.atualizado_por],
      religiao: [this.cliente.religiao],
      indicacao: [this.cliente.indicacao],
      indicacao_nome: [this.cliente.indicacao_nome],
      dependentes: [this.cliente.dependentes],
      subDependentes: [this.cliente.subDependentes]
    })

    this.setDependentes([]);
    this.getProfissao();
    this.getCategorias();
    this.copiarDependentes();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  create() {

    if (this.form.value.nome_fantasia == "") {
      return alert("Campo Nome Obrigatório!");
    }

    if (this.form.value.pessoa == 'PF' || this.form.value.pessoa == 'PO') {
      if (this.form.value.nome_mae == "" || this.form.value.nome_mae == null) {
        return alert("Nome da Mãe Obrigatório!");
      }

      if (this.form.value.sexo == "" || this.form.value.sexo == null) {
        return alert("Informar o sexo do cliente");
      }
    }

    if (this.form.value.pessoa != 'PO' && this.form.value.celular == "") {
      return alert("Número de celular Obrigatório!");
    }

    if (this.form.value.pessoa == 'PF') {
      if (this.form.value.emissor == "" || this.form.value.emissor == null) {
        return alert("Orgão emissor Obrigatório!");
      }
    }

    this.loadingService.showLoading("Salvando cadastro...")
      .then(() => {
        this.form.patchValue({ dependentes: this.cliente.dependentes });

        const id = this.activatedRoute.snapshot.paramMap.get('id');

        if (id !== 'novo-cliente') {
          this.clienteService.update(id, this.form.value, this.criadoEm)
            .then((data: any) => {
              this.loadingService.hideLoading();
              if (data.status == 1) return alert(data.mensagem);
              this.router.navigate(['clientes']);
            })
        } else {
          this.clienteService.create(this.form.value)
            .then((data: any) => {
              this.loadingService.hideLoading();
              if (data.status == 1) return alert(data.mensagem);
              this.router.navigate(['clientes']);
            })
        }
      })
  }

  getCategorias() {
   this.subscription = this.categoriaClienteService.get()
      .subscribe((data: any[]) => {
        this.categorias = this.selectService.handleSelect(data, 'id', 'nome')
      })
  }

  /**
   * Observable para os profissões de óbitos
  */
  getProfissao() {
    this.profissao$ = this.profissaoPesquisada.pipe(
      debounceTime(500),
      switchMap((profissao: string) => this.clienteService.getProfissao(profissao)),
      distinctUntilChanged()
    )

    this.profissao$.subscribe((data) => {
      this.profissoes = this.selectService.handleSelect(data, 'profissao');
    })
  }

  /**
   * Pesquisa profissões
   * @param profissao
  */
  pesquisaProfissao(profissao) {
    this.profissaoPesquisada.next(profissao);
  }

  selecionaProfissao(profissao) {
    this.form.patchValue({ profissao: profissao.value });
    this.profissoes = [];
  }

  get() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.queryParams.subscribe(data => {

      this.criadoEm = data.aplicativo ? 'aplicativo' : 'sistema';

      if (id != 'novo-cliente') {
        this.loadingService.showLoading("Carregando dados...")
          .then(() => {
            const id = data.aplicativo ? data.aplicativo : data.sistema;
            this.clienteService.show(id, this.criadoEm)
              .then((data: any) => {
                this.cliente = new ClienteModel(data.cliente[0]);

                if (navigator.onLine && data.dependentes)
                  this.cliente.dependentes = data.dependentes;
                this.form.patchValue(this.cliente);

                this.loadingService.hideLoading();

              });
          })
      }
    });

  }

  setDependentes(dependentes: IDependentes[]) {
    this.cliente.dependentes = dependentes.length == 0 ? this.dependentesService.reorganizar() : dependentes;
  }

  pesquisaCPF() {
   this.subscription = this.clienteService.pesquisaCPF(this.form.value.cnpjcpf)
      .subscribe((data: any) => {
        if (data.status == 1) {
          alert(data.mensagem + ' ' + data.cliente[0].nome_fantasia)
          this.form.patchValue({ cnpjcpf: '' })
          return;
        }
      })
  }

  getCep(cliente: string) {
    const cep = cliente == 'primario' ? this.form.value.cep : this.form.value.eCep;

   this.subscription = this.adressService.getCep(cep)
      .subscribe((data: CepModel) => {
        if (data.erro) return alert(messages.address.cep)
        if (cliente == 'primario')
          this.form.patchValue({
            "endereco": data.logradouro,
            "complemento": data.complemento,
            "bairro": data.bairro,
            "cidade": data.localidade,
            "estado": data.uf
          })
        else
          this.form.patchValue({
            "eEndereco": data.logradouro,
            "eComplemento": data.complemento,
            "eBairro": data.bairro,
            "eCidade": data.localidade,
            "eEstado": data.uf
          })
      })
  }

  copiarDependentes() {
    this.dependentesCopiados = '';
    this.cliente.dependentes.map((dependente) => {
      this.dependentesCopiados += (dependente.nome) ? dependente.nome + ' ' : '';
      this.dependentesCopiados += (dependente.cpf) ? dependente.cpf + ' ' : '';
      this.dependentesCopiados += (dependente.tipo) ? dependente.tipo + ' | ' : '';
    })
  }

  sendWhatsapp() {
    this.socialSharing.shareViaWhatsAppToReceiver(
      this.utilsService.changeTelefone(this.form.value.celular),
      ``,
      '',
      'null'
    );
  }

  getCell(){
   this.subscription = this.clienteService.getCell(this.form.value.celular)
    .subscribe((data:any) => {
      if(data.status == 1){
       alert(data.mensagem + ' ' + data.cliente[0].nome_fantasia)
      this.form.patchValue({calular: ''})
      return;
      }
    })
  }
}
