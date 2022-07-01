export class IParcela {
  parcela_data: any;
  parcela_valor: number;
  parcela_forma_pagamento: any;
  parcela_obs?: string;

  constructor(data?) {
    this.parcela_data = data.parcela_data || '';
    this.parcela_valor = data.parcela_valor || '';
    this.parcela_forma_pagamento = data.parcela_forma_pagamento || '';
    this.parcela_obs = data.parcela_obs || ';'
  }
}
