export class ClienteModel {
    id?: number;
    cliente?: string;
    tipoDePessoa?: string;
    cpf?: number;
    rg?: number;
    emissor?: string;
    nome?: string;
    dataNascimento?: number;
    naturalidade?: string;
    cep?: number;
    endereco?: string;
    numero?: number;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    celular?: number;
    telefone?: number;
    tipoDeCadastro?: string;
    sexo?: string;
    estadoCivil?: string;
    profissao?: string;
    email?: string;
    receberSms?: string;
    receberTorpedo?: string;
    nomeDaMae?: string;
    nomeDoPai?: string;
    createdAt: Date;
    updatedAt: Date;

    /**
     * Constructor
     *
     * @param data
     *     */
    constructor(data?) {
        data = data || {};
        this.id = data.id || '';
        this.cliente = data.cliente || '';
        this.tipoDePessoa = data.tipoDePessoa || '';
        this.cpf = data.cpf || '';
        this.rg = data.rg || '';
        this.emissor = data.emissor || '';
        this.nome = data.nome || '';
        this.dataNascimento = data.dataNascimento ||'';
        this.naturalidade = data.naturalidade || '';
        this.cep = data.cep || '';
        this.endereco = data.endereco || '';
        this.numero = data.numero || '';
        this.complemento = data.complemento || '';
        this.bairro = data.bairro || '';
        this.cidade = data.cidade || '';
        this.estado = data.estado || '';
        this.celular = data.celular || '';
        this.tipoDeCadastro = data.tipoDeCadastro || '';
        this.sexo = data.sexo || '';
        this.estadoCivil = data. estadoCivil || '';
        this.profissao = data. profissao || '';
        this.email = data.email || '';
        this.receberSms = data.receberSms || '';
        this.receberTorpedo = data.receberTorpedo || '';
        this.nomeDaMae = data.nomeDaMae || '';
        this.nomeDoPai = data.nomeDoPai || '';
     }
}

export interface IEnderecos {
    tipoDeEndereco?: string;
    tipoDePessoa?: string;
    cpf?: number;
    endereco?: number;
    numero?: number;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    religiao?: string;
}

export interface IDadosAdicionais{
    categoriaClassificacao?: string;
    situacao?: string;
}

export interface IDependentes {
    nomeDependente?: string;
    grauParentesco?: string;
    telefonePrincipal?: number;
    cpf?: number;
    dataNascimento?: number;
}
