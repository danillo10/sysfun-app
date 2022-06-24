import moment from 'moment';

export class ContasReceberBaixaModel{
    id?: any;
    descricao?: string;
    cliente?: any;
    nome_fantasia?: any;
    data_liquidacao?: any;
    conta_bancaria?: any;
    forma_pagamento?: any;
    forma_descricao?: any;
    valor?: any;
    juros?: any;
    desconto?: any;
    acrescimo?: any;
    obs?: any;
    pago?: any;
    situacao?: any

    constructor(data?){
        data = data || {};
        this.id = data.id || '';
        this.descricao = data.descricao || '';
        this.cliente = data.cliente || '';
        this.nome_fantasia = data.nome_fantasia || '';
        this.data_liquidacao = moment().format('DD/MM/YYYY');
        this.conta_bancaria = data.conta_bancaria || '';
        this.forma_pagamento = data.forma_pagamento || '';
        this.forma_descricao = data.forma_descricao || '';
        this.valor = data.valor || '';
        this.juros = data.juros || '';
        this.desconto = data.desconto || '';
        this.acrescimo = data.acrescimo || '';
        this.obs = data.obs || 'Baixa parcial';
        this.pago = data.pago || false;
        this.situacao = data.situacao || '';
    }
}
