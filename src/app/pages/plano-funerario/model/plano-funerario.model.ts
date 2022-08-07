import { IParcela } from 'src/app/components/parcelas/model/parcelas.model';

export class PlanoFunerarioModel {
  id?: any;
  tipo?: string;
  cliente?: any;
  cliente_nome?: any;
  indicacao?: any;
  indicacao_nome?: string;
  indicacao_parcelas?: any;
  tipo_liberacao?: any;
  tecnico?: any;
  tecnico_nome?: any;
  profissional?: any;
  profissional_nome?: any;
  situacao?: any;
  lista_preco?: any;
  falecido?: any;
  contato?: any;
  valor_servicos?: any;
  valor_produtos?: any;
  valor_despesas?: any;
  valor_desconto_v?: any;
  valor_desconto_p?: any;
  valor_bruto?: any;
  valor_liquido?: any;
  taxa_adesao?: any;
  data_inicial?: Date;
  forma_pagamento?: any;
  condicao_pagamento?: number;
  qtd_parcelas?: any;
  carencia?: any;
  rg_f_pendente?: any;
  cpf_f_pendente?: any;
  declaracao_f_pendente?: any;
  casamento_f_pendente?: any;
  residencia_f_pendente?: any;
  nascimento_f_pendente?: any;
  cobito_f_pendente?: any;
  auxilio_f_pendente?: any;
  rg_r_pendente?: any;
  cpf_r_pendente?: any;
  residencia_r_pendente?: any;
  casamento_r_pendente?: any;
  data_os?: any;
  data_entrega?: any;
  garantia?: any;
  data_realizacao?: any;
  hora_realizacao?: any;
  referencia?: string;
  obs?: string;
  obs_internas?: string;
  equipamento?: string;
  problema?: string;
  obs_recebimento?: string;
  contas_lancadas?: string;
  laudo?: string;
  servicos?: Array<any>;
  produtos?: Array<any>;
  dependentes?: Array<any>;
  parcelas?: IParcela[];
  criado_por?: any;
  atualizado_por?: any;
  os_gerada?: any;
  repetir_valor?: string;
  pesquisados?: any[];

  /**
   * Constructor
   *
   * @param data
   *     */
  constructor(data?) {
    data = data || {};
    this.id = data.id || '';
    this.tipo = data.tipo || '';
    this.cliente = data.cliente || '';
    this.cliente_nome = data.cliente_nome || '';
    this.indicacao = data.indicacao || '';
    this.indicacao_parcelas = data.indicacao_parcelas || '';
    this.tipo_liberacao = data.tipo_liberacao || '';
    this.tecnico = data.tecnico || '';
    this.tecnico_nome = data.tecnico_nome || '';
    this.profissional = data.profissional || '';
    this.profissional_nome = data.profissional_nome || '';
    this.situacao = data.situacao || '';
    this.lista_preco = data.lista_preco || '';
    this.falecido = data.falecido || '';
    this.contato = data.contato || '';
    this.valor_servicos = data.valor_servicos || '';
    this.valor_produtos = data.valor_produtos || '';
    this.valor_despesas = data.valor_despesas || '';
    this.valor_desconto_v = data.valor_desconto_v || '';
    this.valor_desconto_p = data.valor_desconto_p || '';
    this.valor_bruto = data.valor_bruto || '';
    this.valor_liquido = data.valor_liquido || 'Dividir';
    this.taxa_adesao = data.taxa_adesao || '';
    this.data_inicial = data.data_inicial || new Date(Date.now());
    this.forma_pagamento = data.forma_pagamento || '';
    this.condicao_pagamento = data.condicao_pagamento || '';
    this.qtd_parcelas = data.qtd_parcelas || '';
    this.carencia = data.carencia || '';
    this.rg_f_pendente = data.rg_f_pendente || '';
    this.cpf_f_pendente = data.cpf_f_pendente || '';
    this.declaracao_f_pendente = data.declaracao_f_pendente || '';
    this.casamento_f_pendente = data.casamento_f_pendente || '';
    this.residencia_f_pendente = data.casamento_f_pendente || '';
    this.nascimento_f_pendente = data.nascimento_f_pendente || '';
    this.cobito_f_pendente = data.cobito_f_pendente || '';
    this.auxilio_f_pendente = data.auxilio_f_pendente || '';
    this.rg_r_pendente = data.rg_r_pendente || '';
    this.cpf_r_pendente = data.cpf_r_pendente || '';
    this.residencia_r_pendente = data.residencia_r_pendente || '';
    this.casamento_r_pendente = data.casamento_r_pendente || '';
    this.data_os = data.data_os || '';
    this.data_entrega = data.data_entrega || '';
    this.garantia = data.garantia || '';
    this.data_realizacao = data.data_realizacao || '';
    this.hora_realizacao = data.hora_realizacao || '';
    this.referencia = data.referencia || '';
    this.obs = data.obs || '';
    this.obs_internas = data.obs_internas || '';
    this.equipamento = data.equipamento || '';
    this.problema = data.problema || '';
    this.obs_recebimento = data.obs_recebimento || '';
    this.contas_lancadas = data.contas_lancadas || '';
    this.laudo = data.laudo || '';
    this.servicos = data.servicos || '';
    this.produtos = data.produtos || '';
    this.dependentes = data.dependentes || [];
    this.parcelas = data.parcelas || '';
    this.criado_por = data.criado_por || '';
    this.atualizado_por = data.atualizado_por || '';
    this.os_gerada = data.os_gerada || '';
    this.repetir_valor = data.repetir_valor || '';
    this.pesquisados = [];
    this.parcelas = data.parcelas || [];
  }
}

export class IPlanoFunerario {
  id?: number;
  nome?: string;
  valor_venda?: number;
  qtd_parcelas?: number;
  created_at?: Date;
  updated_at?: Date;
  numero?: number;
  servico_id?: number;
  servico_plano?: number;
  servico_nome?: string;
  servico_quantidade?: number;
  servico_parcelas?: number;
  servico_valor_unitario?: number;
  servico_valor_total?: number;
  loading?: boolean;
  pesquisados?: any[];

  constructor(data?) {
    data = data || {};
    this.id = null;
    this.numero = data.numero + 1 || 1;
    this.nome = null;
    this.valor_venda = null;
    this.pesquisados = [];
    this.servico_id = data.servico_id || null;
    this.servico_plano = data.servico_plano || null;
    this.servico_quantidade = data.servico_quantidade + 1 || 1;
    this.servico_parcelas = data.servico_parcelas || null;
    this.servico_valor_unitario = data.servico_valor_unitario || '';
    this.servico_valor_total = data.servico_valor_total || '';
    this.loading = data.loading || false;
  }
}
