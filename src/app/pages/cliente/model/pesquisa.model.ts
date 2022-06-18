export class PesquisaModel {
  descricao?: string;
  situacao?: string;
  tipo_pesquisa?: string;
  tipo_cadastro?: string;
  categoria?: string;
  cliente?:string;
  pessoa?: string;
  deve_receber_sms?: string;
  deve_receber_torpedo_voz?: string;
  tipo?:string;
  skip?: number;
  registros?: number;
  pagina?: number;
  ultimaAtualizacao?: any
  vencimento_inicio?: any;
  vencimento_final?: any;
  estado?: string;
  cidade?: string;
  bairro?: string;
  endereco?: string;

  constructor(data?){
    data = data || {};
    this.descricao = data.descricao || '';
    this.vencimento_inicio = data.vencimento_inicio || '';
    this.vencimento_final = data.vencimento_final || '';
    this.estado = data.estado || '';
    this.cidade = data.cidade || '';
    this.bairro = data.bairro || '';
    this.endereco = data.endereco || '';
    this.situacao = data.situacao || '';
    this.skip = data.skip || 0;
    this.registros = data.registros || 10;
  }
}
