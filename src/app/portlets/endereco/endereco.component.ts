import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { SelectService } from 'src/app/shared/services/select.service';
import { EnderecoService } from './service/endereco.service';
@Component({
  selector: 'app-portlet-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss'],
})
export class EnderecoComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;
 
  enderecos: SelectModel[];
  
  pesquisa = {} as PesquisaModel;
  
  constructor(
    private enderecoService: EnderecoService,
    private selectService: SelectService,
  ) { }

  ngOnInit() {
    this.enderecos = [];
    this.get();
  }

  get() {
    this.enderecoService.enderecos$
      .subscribe((data: any) => {
        this.enderecos = this.selectService.handleSelect(data, 'enderecos');
      })
  }

  pesquisaEndereco(){
    this.enderecoService.pesquisa.next({endereco: this.pesquisa.descricao,bairro: this.form.value.bairro, cidade: this.form.value.cidade,estado: this.form.value.estado});
  }

  selecionaEndereco(endereco){
    this.form.patchValue({endereco: endereco.value});
    this.enderecoService.pesquisa.next('');
  }

}
