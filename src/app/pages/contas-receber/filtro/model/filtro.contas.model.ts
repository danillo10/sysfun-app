export class IFiltroContas{
    descricao: string;
    vencimento_inicio: any;
    vencimento_final: any;
    estado: string;
    cidade: string;
    bairro: string;
    endereco: string;
    situacao: any;

    constructor(data?){
      data = data || {};
      this.descricao = data.descricao || '';
      this.vencimento_inicio = data.vencimento_inicio || '';
      this.vencimento_final = data.vencimento_final || '';
      this.estado = data.estado || 'MA';
      this.cidade = data.cidade || '';
      this.bairro = data.bairro || '';
      this.endereco = data.endereco || '';
      this.situacao = data.situacao || '';
    }
}
