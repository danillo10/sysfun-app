import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { SelectService } from 'src/app/shared/services/select.service';
import { CidadeService } from './service/cidade.service';

@Component({
  selector: 'app-portlet-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss'],
})
export class CidadeComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;

  cidades: SelectModel[];
  subscription: Subscription;

  pesquisa = {} as PesquisaModel;

  constructor(
    private cidadeService: CidadeService,
    private selectService: SelectService,
  ) {
    this.cidades = [];
  }

  ngOnInit() {
    this.get();
  }

  ionViewDidEnter(){
  }

  ionViewDidLeave(){
    this.subscription.unsubscribe();
  }

  get() {
    this.subscription = this.cidadeService.cidades$.subscribe(((data: any) => {
      this.cidades = this.selectService.handleSelect(data, 'cidade');
    }));
  }

  pesquisaCidade(){
    this.cidadeService.pesquisa.next({cidade:this.pesquisa.descricao, estado: this.form.value.estado});
  }

  selecionaCidade(cidade){
    this.form.patchValue({cidade: cidade.value});
    this.cidadeService.pesquisa.next('');
  }

}
