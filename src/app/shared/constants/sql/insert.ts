export const insertClientes = `INSERT INTO clientes (id_dependente,
    aplicativo,
    situacao)
    VALUES (?,?,?)`;

export const insertClientesDependentes = `INSERT INTO clientes_dependentes (cliente,
    cliente_id,
    id_dependente,
    numero,
    nome,
    tipo,
    telefone,
    rg,
    cpf,
    data_nasc,
    created_at,
    updated_at,
    criado_por)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export const insertContasReceber = `INSERT INTO contas_receber (descricao,
    conta_bancaria,
    categoria,
    cliente,
    vendedor,
    atendente_l_comissao,
    vendedor_2,
    atendente_2_comissao,
    vencimento,
    data_liquidacao,
    valor_liquidacao,
    valor,
    tipo_registro,
    data_emissao,
    pago,
    parcial,
    situacao,
    status,
    taxa_paga,
    protestar,
    n_doc,
    forma_pagamento,
    centro_custos,
    ocorrencia,
    obs,
    referencia,
    n_os,
    n_parcelas,
    n_carne,
    n_carne_boleto,
    urlcarne,
    urlboleto,
    n_boleto,
    email_enviado,
    criado_por,
    atualizado_por,
    created_at,
    update_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export const insertContasReceberBaixas = `INSERT INTO contas_receber_baixas (conta_id,
    referencia,
    data_liquidacao,
    valor,
    juros,
    desconto,
    acrescimo,
    conta_bancaria,
    forma_pagamento,
    tipo_pagamento,
    created_at,
    updated_at,
    baixa_por)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export const insertContasReceberParcelas = `INSERT INTO contas_receber_parcelas (conta_receber_id,
    parcela_numero,
    parcela_data,
    parcela_valor,
    parcela_forma_pagamento,
    parcela_obs,
    created_at,
    updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

export const insertPlanosFunerarios = `INSERT INTO planos_funerarios (
    cliente,
    indicacao
    )
    VALUES (?,?)`;

export const insertPlanosFunerariosDependentes = `INSERT INTO planos_funerarios_dependentes (plano_id,
    nome,
    tipo,
    telefone,
    rg,
    cpf,
    data_nasc,
    created_at,
    updated_at,
    dependente_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export const insertPlanosFunerariosParcelas = `INSERT INTO planos_funerarios_parcelas (plano_id,
    parcela_numero,
    parcela_data,
    parcela_valor,
    parcela_forma_pagamento,
    parcela_obs,
    created_at,
    updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

export const insertPlanosFunerariosServicos = `INSERT INTO planos_funerarios_service (plano_id,
    servico_plano,
    servico_id,
    servico_quantidade,
    servico_parcelas,
    servico_valor_unitario,
    servico_valor_total,
    created_at,
    updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export const insertPlanosFunerariosStatus = `INSERT INTO planos_funerarios_status (plano_id,
    data,
    obs,
    situacao,
    created_at,
    updated_at)
    VALUES (?, ?, ?, ?, ?, ?)`;
