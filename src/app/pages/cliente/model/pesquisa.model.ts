export class PesquisaModel {
  descricao?: string;
  situacao?: string;
  status?: string;
  tipo_pesquisa?: string;
  tipo_cadastro?: string;
  categoria?: string;
  cliente?: string;
  indicacao?: string;
  vendedor?: string;
  pessoa?: string;
  deve_receber_sms?: string;
  deve_receber_torpedo_voz?: string;
  tipo?: string;
  skip?: number;
  registros?: number;
  pagina?: number;
  ultimaAtualizacao?: any;
  vencimento_inicio?: any;
  vencimento_final?: any;
  recebimento_inicio?: any;
  recebimento_final?: any;
  estado?: string;
  cidade?: string;
  bairro?: string;
  endereco?: string;
  forma_pagamento?: number;

  constructor(data?) {
    data = data || {};
    this.descricao = data.descricao || '';
    this.vencimento_inicio = data.vencimento_inicio || '';
    this.vencimento_final = data.vencimento_final || '';
    this.recebimento_inicio = data.recebimento_inicio || '';
    this.recebimento_final = data.recebimento_final || '';
    this.estado = data.estado || '';
    this.cidade = data.cidade || '';
    this.bairro = data.bairro || '';
    this.endereco = data.endereco || '';
    this.situacao = data.situacao || '';
    this.status = data.status || '';
    this.skip = data.skip || 0;
    this.registros = data.registros || 10;
    this.forma_pagamento = data.forma_pagamento || '';
  }
}
