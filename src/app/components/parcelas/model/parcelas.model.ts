export class IParcela {
  id: any;
  parcela_numero: number;
  parcela_data: any;
  parcela_valor: number;
  parcela_forma_pagamento: any;
  parcela_pago?: string;
  parcela_obs?: string;
  alterada: boolean;

  constructor(data?) {
    data = data || {};
    this.id = data.id || '';
    this.parcela_numero = data.parcela_numero || '';
    this.parcela_data = data.parcela_data || '';
    this.parcela_valor = data.parcela_valor || '';
    this.parcela_forma_pagamento = data.parcela_forma_pagamento || '11';
    this.parcela_pago = data.parcela_pago || '';
    this.parcela_obs = data.parcela_obs || '';
    this.alterada = data.alterada || false;
  }
}
