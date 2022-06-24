import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  constructor(
    private clientePortletService: ClientePortletService,
    private selectService: SelectService,
  ) {
    this.cliente = [];
   }

  ngOnInit() {}

  get() {
    this.clientePortletService.clientes$
      .subscribe((data: any) => {
        this.cliente = this.selectService.handleSelect(data, 'cliente');
      })
  }

  pesquisaCliente(){
    this.clientePortletService.pesquisa.next({cliente:this.pesquisa.cliente});
  }

  selecionaCliente(cliente){
    this.form.patchValue({cliente: cliente.value});
    this.clientePortletService.pesquisa.next('');
  }

}
