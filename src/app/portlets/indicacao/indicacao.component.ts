import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { SelectService } from 'src/app/shared/services/select.service';
import { IndicacaoPortletService } from './service/indicacao.service';

@Component({
  selector: 'app-portlet-indicacao',
  templateUrl: './indicacao.component.html',
  styleUrls: ['./indicacao.component.scss'],
})
export class IndicacaoPortletComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;

  indicacao: SelectModel[];
  pesquisa = {} as PesquisaModel;
  subscription: Subscription;

  constructor(
    private indicacaoPortletService: IndicacaoPortletService,
    private selectService: SelectService
  ) {
    this.indicacao = [];
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
    this.subscription = this.indicacaoPortletService.indicacao$.subscribe((data: any) => {
      this.indicacao = this.selectService.handleSelect(
        data,
        'id',
        'nome_fantasia'
      );
    });
  }

  pesquisaIndicacao() {
    this.indicacaoPortletService.pesquisa.next({
      indicacao: this.pesquisa.indicacao,
    });
  }

  selecionaIndicacao(indicacao) {
    this.form.patchValue({
      indicacao: indicacao.value,
      nome_indicacao: indicacao.description,
    });
    this.indicacaoPortletService.pesquisa.next('');
  }
}
