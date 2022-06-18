import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { SelectService } from 'src/app/shared/services/select.service';
import { BairroService } from './service/bairro.service';

@Component({
  selector: 'app-portlet-bairro',
  templateUrl: './bairro.component.html',
  styleUrls: ['./bairro.component.scss'],
})
export class BairroComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;

  bairros: SelectModel[];

  pesquisa = {} as PesquisaModel;

  constructor(
    private bairroService: BairroService,
    private selectService: SelectService,
  ) {
    this.bairros = [];
  }

  ngOnInit() {
    this.get();
  }

  get() {
    this.bairroService.bairros$
      .subscribe((data: any) => {
        this.bairros = this.selectService.handleSelect(data, 'bairro');
      })
  }

  pesquisaBairro(){
    this.bairroService.pesquisa.next({bairro: this.pesquisa.descricao, cidade: this.form.value.cidade,estado: this.form.value.estado});
    console.log(this.pesquisa.descricao)
  }

  selecionaBairro(bairro){
    this.form.patchValue({bairro: bairro.value});
    this.bairroService.pesquisa.next('');
  }
}
