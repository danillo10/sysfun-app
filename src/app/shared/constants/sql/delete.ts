export const deleteClientes = `DELETE FROM clientes WHERE id = ?`;

export const deleteClientesDependentes = `DELETE FROM clientes_dependentes WHERE id = ?`;

export const deleteContasReceber = `DELETE FROM contas_receber WHERE id = ?`;

export const deleteContasReceberBaixas = `DELETE FROM contas_receber_baixas WHERE id = ?`;

export const deleteContasReceberParcelas = `DELETE FROM contas_receber_parcelas WHERE id = ?`;

export const deletePlanosFunerarios = `DELETE FROM planos_funerarios WHERE id = ?`;

export const deletePlanosFunerariosDependentes = `DELETE FROM planos_funerarios_dependentes WHERE id = ?`;

export const deletePlanosFunerariosParcelas = `DELETE FROM planos_funerarios_parcelas WHERE id = ?`;

export const deleteFunerariosServicos = `DELETE FROM planos_funerarios_service WHERE id = ?`;

export const deleteFunerariosStatus = `DELETE FROM planos_funerarios_status WHERE id = ?`;
