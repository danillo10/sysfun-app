export interface PesquisaModel {
  situacao?: string,
  tipo_pesquisa?: string,
  tipo_cadastro?: string,
  categoria?: string,
  cliente?:string,
  pessoa?: string,
  deve_receber_sms?: string,
  deve_receber_torpedo_voz?: string,
  tipo?:string,
  skip?: number,
  registros?: number,
  pagina?: number,
  ultimaAtualizacao?: any
}
