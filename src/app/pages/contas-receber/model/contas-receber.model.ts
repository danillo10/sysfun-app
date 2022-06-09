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
    ocorrencia?: any;
    qtdParcelas?: number;
    obs?: string;
    referencia?: any;
    atendentes?: any;
    parcelas?: any;
    criado_por: any;
    atualizado_por: any;
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
        this.ocorrencia = data.ocorrencia || '';
        this.qtdParcelas = data.qtdParcelas || '';
        this.obs = data.obs || '';
        this.referencia = data.referencia || '';
        this.atendentes = data.atendentes || '';
        this.parcelas = data.parcelas || '';
        this.criado_por = data.criado_por || '';
        this.atualizado_por = data.atualizado_por || '';
    }
}
