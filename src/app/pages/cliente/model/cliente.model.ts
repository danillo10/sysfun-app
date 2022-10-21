export class ClienteModel {
  id: number;
  pessoa: string;
  cnpjcpf: string;
  rg: string;
  emissor: string;
  nome_fantasia: string;
  data_nascimento: Date;
  naturalidade: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  celular: string;
  telefone: string;
  tipo_cadastro: string;
  sexo: string;
  estado_civil: string;
  profissao: string;
  email: string;
  deve_receber_sms: string;
  deve_receber_torpedo_voz: string;
  nome_mae: string;
  nome_pai: string;
  religiao: string;
  categoria: string;
  situacao: string;

  /**
   * Constructor
   *
   * @param data
   *     */
  constructor(data?) {
    data = data || {};
    this.id = data.id || null;
    this.situacao = data.situacao || 'Ativo';
    this.categoria = data.categoria || null;
    this.pessoa = data.pessoa || 'PF';
    this.cnpjcpf = data.cnpjcpf || null;
    this.rg = data.rg || null;
    this.emissor = data.emissor || null;
    this.naturalidade = data.naturalidade || null;
    this.nome_fantasia = data.nome_fantasia || null;
    this.data_nascimento = data.data_nascimento || null;
    this.sexo = data.sexo || 'Masculino';
    this.estado_civil = data.estado_civil || 'Solteiro(a)';
    this.nome_pai = data.nome_pai || null;
    this.nome_mae = data.nome_mae || null;
    this.cep = data.cep || null;
    this.endereco = data.endereco || null;
    this.numero = data.numero || null;
    this.complemento = data.complemento || null;
    this.bairro = data.bairro || null;
    this.cidade = data.cidade || null;
    this.estado = data.estado || null;
    this.telefone = data.telefone || null;
    this.celular = data.celular || null;
    this.email = data.email || null;
    this.tipo_cadastro = data.tipo_cadastro || 'Cliente';
    this.profissao = data.profissao || null;
    this.deve_receber_sms = data.deve_receber_sms || 'Sim';
    this.deve_receber_torpedo_voz = data.deve_receber_torpedo_voz || 'Sim';
    this.religiao = data.religiao || null;
  }
}

// export interface IEnderecos {
//   tipoDeEndereco?: string;
//   tipoDePessoa?: string;
//   cpf?: number;
//   endereco?: number;
//   numero?: number;
//   complemento?: string;
//   bairro?: string;
//   cidade?: string;
//   estado?: string;
//   religiao?: string;
// }

// export interface IDadosAdicionais {
//   categoriaClassificacao?: string;
//   situacao?: string;
// }

// export interface IDependentes {
//   numero?: number;
//   id?: number;
//   aplicativo?: string;
//   cliente?: number;
//   cliente_id?: number;
//   nome?: string;
//   tipo?: string;
//   telefone?: string;
//   rg?: string;
//   cpf?: string;
//   data_nasc?: Date | null;
//   criado_por?: number;
//   pesquisados?: any[];
//   created_at?: Date;
//   updated_at?: Date;
// }
