export class ClienteModel {
  id?: number;
  id_dependente?: number;
  aplicativo?: string;
  aplicativo_id?: number;
  situacao?: string;
  pessoa?: string;
  cnpjcpf?: string;
  cnpj?: string;
  cpf?: string;
  rg?: string;
  emissor?: string;
  razao_social?: string;
  nome_fantasia?: string;
  data_nascimento?: any;
  idade?: string | number;
  naturalidade?: string;
  sexo?: string;
  estado_civil?: string;
  nome_pai?: string;
  nome_mae?: string;
  inscricao_municipal?: string;
  inscricao_estadual?: string;
  cep?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  ibge?: string;
  estado?: string;
  celular?: string;
  email?: string;
  obs?: string;
  tipo_cadastral?: string;
  tipo_cadastro?: string;
  local_obito?: string;
  motivo_obito?: string;
  data_obito?: any;
  data_atestado?: any;
  profissao?: any;
  cep_obito?: any;
  endereco_obito?: string;
  numero_obito?: string;
  complemento_obito?: string;
  bairro_obito?: string;
  cidade_obito?: string;
  estado_obito?: any;
  categoria?: string;
  cNome?: string;
  cNascimento?: string;
  cTelefone?: string;
  cRamal?: string;
  cFax?: string;
  cCelular?: string;
  cEmail?: string;
  cWebsite?: string;
  eTipo_endereco?: string;
  eTipo_pessoa?: string;
  eCnpjcpf?: string;
  eCnpj?: string;
  eCpf?: string;
  eCep?: string;
  eEndereco?: string;
  eBairro?: string;
  eNumero?: string;
  eComplemento?: string;
  eCidade?: string;
  eEstado?: string;
  lista_preco?: any;
  condicao_pagamento?: any;
  conta_bancaria?: any;
  limite_credito?: any;
  limite_ultrapassar?: any;
  data_inicial?: any;
  data_final?: any;
  created_at?: any;
  updated_at?: any;
  data_cadastro?: any;
  hora_cadastro?: any;
  horario?: any;
  plano?: any;
  taxa_adesao?: any;
  dia_parcela?: any;
  deve_receber_sms?: string;
  deve_receber_torpedo_voz?: string;
  criado_por: any;
  atualizado_por: any;
  religiao?: string;
  indicacao?: string;

  responsavel?: string;
  telefone?: string;
  whatsapp?: string;
  dependentes?: IDependentes[];
  pesquisados?: IDependentes[];
  subDependentes?: IDependentes[];
  indicacao_nome?: string;

  /**
   * Constructor
   *
   * @param data
   *     */
  constructor(data?) {
    data = data || {};
    this.id = data.id || '';
    this.id_dependente = data.id_dependente || '';
    this.aplicativo = data.aplicativo || 'S';
    this.aplicativo_id = data.aplicativo_id || '';
    this.responsavel = data.responsavel || '';
    this.situacao = data.situacao || 'Ativo';
    this.categoria = data.categoria || '';
    this.pessoa = data.pessoa || 'PF';
    this.cnpjcpf = data.cnpjcpf || '';
    this.cnpj = data.cnpj || '';
    this.cpf = data.cpf || '';
    this.rg = data.rg || '';
    this.emissor = data.emissor || '';
    this.naturalidade = data.naturalidade || '';
    this.nome_fantasia = data.nome_fantasia || '';
    this.razao_social = data.razao_social || '';
    this.data_nascimento = data.data_nascimento || '';
    this.idade = data.idade || '';
    this.sexo = data.sexo || 'Masculino';
    this.estado_civil = data.estado_civil || 'Solteiro(a)';
    this.nome_pai = data.nome_pai || '';
    this.nome_mae = data.nome_mae || '';
    this.inscricao_municipal = data.inscricao_municipal || '';
    this.inscricao_estadual = data.inscricao_estadual || '';
    this.cep = data.cep || '';
    this.endereco = data.endereco || '';
    this.numero = data.numero || '';
    this.complemento = data.complemento || '';
    this.bairro = data.bairro || '';
    this.cidade = data.cidade || '';
    this.ibge = data.ibge || '';
    this.estado = data.estado || '';
    this.telefone = data.telefone || '';
    this.celular = data.celular || '';
    this.whatsapp = data.whatsapp || '';
    this.email = data.email || '';
    this.obs = data.obs || '';
    this.tipo_cadastral = data.tipo_cadastral || '';
    this.tipo_cadastro = data.tipo_cadastro || 'Cliente';
    this.local_obito = data.local_obito || '';
    this.motivo_obito = data.motivo_obito || '';
    this.data_obito = data.data_obito || '';
    this.data_atestado = data.data_atestado || '';
    this.profissao = data.profissao || '';
    this.cep_obito = data.cep_obito || '';
    this.endereco_obito = data.endereco_obito || '';
    this.numero_obito = data.numero_obito || '';
    this.complemento_obito = data.complemento_obito || '';
    this.bairro_obito = data.bairro_obito || '';
    this.cidade_obito = data.cidade_obito || '';
    this.estado_obito = this.estado_obito || '';
    this.cNome = data.cNome || '';
    this.cNascimento = data.cNascimento || '';
    this.cTelefone = data.cTelefone || '';
    this.cRamal = data.cRamal || '';
    this.cFax = data.cFax || '';
    this.cCelular = data.cCelular || '';
    this.cEmail = data.cEmail || '';
    this.cWebsite = data.cWebsite || '';
    this.eTipo_endereco = data.eTipo_endereco || '';
    this.eTipo_pessoa = data.eTipo_pessoa || '';
    this.eCnpjcpf = data.eCnpjcpf || '';
    this.eCnpj = data.eCnpj || '';
    this.eCpf = data.eCpf || '';
    this.eCep = data.eCep || '';
    this.eEndereco = data.eEndereco || '';
    this.eBairro = data.eBairro || '';
    this.eNumero = data.eNumero || '';
    this.eComplemento = data.eComplemento || '';
    this.eCidade = data.eCidade || '';
    this.eEstado = data.eEstado || '';
    this.lista_preco = data.lista_preco || '';
    this.condicao_pagamento = data.condicao_pagamento || '';
    this.limite_credito = data.limite_credito || '';
    this.limite_ultrapassar = data.limite_ultrapassar || '';
    this.conta_bancaria = data.conta_bancaria || '';
    this.data_inicial = data.data_inicial || '';
    this.data_final = data.data_final || '';
    this.data_cadastro = data.data_cadastro || '';
    this.hora_cadastro = data.hora_cadastro || '';
    this.created_at = data.created_at || '';
    this.updated_at = data.updated_at || '';
    this.dependentes = data.dependentes || [];
    this.pesquisados = [];
    this.subDependentes = data.subDependentes || [];
    this.deve_receber_sms = data.deve_receber_sms || 'Sim';
    this.deve_receber_torpedo_voz = data.deve_receber_torpedo_voz || 'Sim';
    this.criado_por = data.criado_por || '';
    this.atualizado_por = data.atualizado_por || '';
    this.religiao = data.religiao || '';
    this.indicacao = data.indicacao || '';
    this.indicacao_nome = data.indicacao_nome || '';
    this.horario = data.horario || '';
    this.plano = data.plano || '';
    this.taxa_adesao = data.taxa_adesao || '';
    this.dia_parcela = data.dia_parcela || '';
  }

  public formatDb() {
    return [
      this.id_dependente,
      this.aplicativo,
      this.situacao,
      this.pessoa,
      this.cnpjcpf,
      this.rg,
      this.emissor,
      this.razao_social,
      this.nome_fantasia,
      this.data_nascimento,
      this.idade,
      this.naturalidade,
      this.sexo,
      this.estado_civil,
      this.nome_pai,
      this.nome_mae,
      this.inscricao_municipal,
      this.inscricao_estadual,
      this.cep,
      this.endereco,
      this.numero,
      this.complemento,
      this.bairro,
      this.cidade,
      this.ibge,
      this.estado,
      this.celular,
      this.email,
      this.obs,
      this.tipo_cadastral,
      this.local_obito,
      this.motivo_obito,
      this.data_obito,
      this.data_atestado,
      this.profissao,
      this.cep_obito,
      this.endereco_obito,
      this.numero_obito,
      this.complemento_obito,
      this.bairro_obito,
      this.cidade_obito,
      this.estado_obito,
      this.categoria,
      this.cNome,
      this.cNascimento,
      this.cTelefone,
      this.cRamal,
      this.cFax,
      this.cCelular,
      this.cEmail,
      this.cWebsite,
      this.eTipo_endereco,
      this.eTipo_pessoa,
      this.eCnpjcpf,
      this.eCep,
      this.eEndereco,
      this.eBairro,
      this.eNumero,
      this.eComplemento,
      this.eCidade,
      this.eEstado,
      this.lista_preco,
      this.condicao_pagamento,
      this.conta_bancaria,
      this.limite_credito,
      this.limite_ultrapassar,
      this.data_inicial,
      this.data_final,
      this.created_at,
      this.updated_at,
      this.data_cadastro,
      this.hora_cadastro,
      this.horario,
      this.plano,
      this.taxa_adesao,
      this.dia_parcela,
      this.deve_receber_sms,
      this.deve_receber_torpedo_voz,
      this.criado_por,
      this.atualizado_por,
      this.religiao,
      this.indicacao,
    ];
  }
}

export interface IEnderecos {
  tipoDeEndereco?: string;
  tipoDePessoa?: string;
  cpf?: number;
  endereco?: number;
  numero?: number;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  religiao?: string;
}

export interface IDadosAdicionais {
  categoriaClassificacao?: string;
  situacao?: string;
}

export interface IDependentes {
  numero?: number;
  id?: number;
  aplicativo?: string;
  cliente?: number;
  cliente_id?: number;
  nome?: string;
  tipo?: string;
  telefone?: string;
  rg?: string;
  cpf?: string;
  data_nasc?: Date | null;
  criado_por?: number;
  pesquisados?: any[];
  created_at?: Date;
  updated_at?: Date;
}
