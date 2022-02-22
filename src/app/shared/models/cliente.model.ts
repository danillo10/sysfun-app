export class ClienteModel {
    id: number;
    cliente: string;
    tipoDePessoa: string;
    cpf: number;
    rg: number;
    emissor: string;
    nome: string;
    dataNascimento: number;
    naturalidade: string;
    cep: number;
    endereço: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    celular: number;
    telefone: number;
    tipoDeCadastro: string;
    sexo: string;
    estadoCivil: string;
    profissao: string;
    email: string;
    receberSms: string;
    receberTorpedo: string;
    nomeDaMae: string;
    nomeDoPai: string;
    created_at: Date;
    updated_at: Date;

    /**
     * Constructor
     *
     * @param data
    */
    constructor(data?) {
        data = data || {};
        this.id = data.id || '';
    }
}

export interface IEnderecos {
    tipoDeEndereco: string;
    tipoDePessoa: string;
    cpf: number;
    endereco: number;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    religiao: string;
}

export interface IDadosAdicionais{
    categoriaClassificacao: string;
    situacao: string;
}

export interface IDependentes {
    nomeDependente: string;
    grauParentesco: string;
    telefonePrincipal: number;
    cpf: number;
    dataNascimento: number;
}
