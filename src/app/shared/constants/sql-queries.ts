export const createTableClientes = `CREATE TABLE clientes (
    id INTEGER NOT NULL AUTOINCREMENT,
    id_dependente INTEGER,
    aplicativo TEXT,
    situacao TEXT,
    PRIMARY KEY(id),
    FOREIGN KEY(id_dependente) REFERENCES clientes_dependentes(id)
)`;

export const createTablePlanosFunerarios = `CREATE TABLE planos_funerarios ()`;
