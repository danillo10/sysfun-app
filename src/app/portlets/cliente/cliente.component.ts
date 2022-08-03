import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { SelectService } from 'src/app/shared/services/select.service';
import { ClientePortletService } from './service/cliente.service';

@Component({
  selector: 'app-portlet-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClientePortletComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;

  cliente: SelectModel[];
  pesquisa = {} as PesquisaModel;
  subscription: Subscription;

  constructor(
    private clientePortletService: ClientePortletService,
    private selectService: SelectService
  ) {
    this.cliente = [];
  }

  ngOnInit() {
    this.get();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  get() {
    this.subscription = this.clientePortletService.clientes$.subscribe((data: any) => {
      this.cliente = this.selectService.handleSelect(
        data,
        'id',
        'nome_fantasia'
      );
    });
  }

  pesquisaCliente() {
    this.clientePortletService.pesquisa.next({
      cliente: this.pesquisa.cliente,
    });
  }

  selecionaCliente(cliente) {
    this.form.patchValue({
      cliente: cliente.value,
      nome_cliente: cliente.description,
    });
    this.clientePortletService.pesquisa.next('');
  }
}
