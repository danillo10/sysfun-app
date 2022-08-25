export class IContasReceber {
  id?: number;
  descricao: string;
  conta_bancaria?: number;
  categoria?: number;
  categoria_descricao?: string;
  cliente?: number;
  cliente_descricao?: string;
  vencimento?: any;
  valor?: any;
  tipo_registro?: any;
  data_emissao?: any;
  pago?: boolean;
  situacao?: boolean;
  protestar?: boolean;
  data_liquidacao?: any;
  valor_liquidacao?: any;
  n_doc?: string;
  n_os?: any;
  n_parcela?: any;
  forma_pagamento?: number;
  parcela_pago?: any;
  centro_custos?: any;
  centro_custos_descricao?: string;
  ocorrencia?: any;
  qtdParcelas?: number;
  obs?: string;
  referencia?: any;
  atendentes?: any;
  parcelas?: any;
  criado_por: any;
  atualizado_por: any;
  action: boolean;
  vendedor: any;
  atendente_l_comissao: any;
  vendedor_2: any;
  atendente_2_comissao: any;
  parcial: any;
  status: any;
  taxa_paga: any;
  n_parcelas: any;
  n_carne: any;
  n_carne_boleto: any;
  urlcarne: any;
  urlboleto: any;
  n_boleto: any;
  email_enviado: any;
  created_at: any;
  update_at: any;

  /**
   * Constructor
   *
   * @param data
   *     */
  constructor(data?) {
    data = data || {};
    this.id = data.id || '';
    this.descricao = data.descricao || '';
    this.conta_bancaria = data.conta_bancaria || '';
    this.categoria = data.categoria || '';
    this.cliente = data.cliente || '';
    this.vencimento = data.vencimento || '';
    this.valor = data.valor || '';
    this.tipo_registro = data.tipo_registro || 'Boleto';
    this.data_emissao = data.data_emissao || '';
    this.pago = data.pago || '';
    this.situacao = data.situacao || '';
    this.protestar = data.protestar || '';
    this.data_liquidacao = data.data_liquidacao || '';
    this.valor_liquidacao = data.valor_liquidacao || '';
    this.n_doc = data.n_doc || '';
    this.n_os = data.n_os || '';
    this.n_parcela = data.n_parcela || '';
    this.forma_pagamento = data.forma_pagamento || '';
    this.parcela_pago = data.parcela_pago || '';
    this.centro_custos = data.centro_custos || '';
    this.centro_custos_descricao = data.centro_custos_descricao || '';
    this.ocorrencia = data.ocorrencia || 'Unica';
    this.qtdParcelas = data.qtdParcelas || 1;
    this.obs = data.obs || '';
    this.referencia = data.referencia || '';
    this.atendentes = data.atendentes || '';
    this.parcelas = data.parcelas || '';
    this.criado_por = data.criado_por || '';
    this.atualizado_por = data.atualizado_por || '';
    this.action = false;

    this.vendedor = data.vendedor || '';
    this.atendente_l_comissao = data.atendente_l_comissao || '';
    this.vendedor_2 = data.vendedor_2 || '';
    this.atendente_2_comissao = data.atendente_2_comissao || '';
    this.parcial = data.parcial || '';
    this.status = data.status || '';
    this.taxa_paga = data.taxa_paga || '';
    this.n_parcelas = data.n_parcelas || '';
    this.n_carne = data.n_carne || '';
    this.n_carne_boleto = data.n_carne_boleto || '';
    this.urlcarne = data.urlcarne || '';
    this.urlboleto = data.urlboleto || '';
    this.n_boleto = data.n_boleto || '';
    this.email_enviado = data.email_enviado || '';
    this.created_at = data.created_at || '';
    this.update_at = data.update_at || '';
  }

  public formatDb() {
    return [
      this.descricao,
      this.conta_bancaria,
      this.categoria,
      this.cliente,
      this.vendedor,
      this.atendente_l_comissao,
      this.vendedor_2,
      this.atendente_2_comissao,
      this.vencimento,
      this.data_liquidacao,
      this.valor_liquidacao,
      this.valor,
      this.tipo_registro,
      this.data_emissao,
      this.pago,
      this.parcial,
      this.situacao,
      this.status,
      this.taxa_paga,
      this.protestar,
      this.n_doc,
      this.forma_pagamento,
      this.centro_custos,
      this.ocorrencia,
      this.obs,
      this.referencia,
      this.n_os,
      this.n_parcelas,
      this.n_carne,
      this.n_carne_boleto,
      this.urlcarne,
      this.urlboleto,
      this.n_boleto,
      this.email_enviado,
      this.criado_por,
      this.atualizado_por,
      this.created_at,
      this.update_at,
    ];
  }
}
