export const deleteClientes = `DELETE FROM clientes WHERE id = ?`;

export const deleteClientesDependentes = `DELETE FROM clientes_dependentes WHERE id = ?`;

export const deleteContasReceber = `DELETE FROM contas_receber WHERE id = ?`;

export const deleteContasReceberBaixas = `DELETE FROM contas_receber_baixas WHERE id = ?`;

export const deleteContasReceberParcelas = `DELETE FROM contas_receber_parcelas WHERE id = ?`;
