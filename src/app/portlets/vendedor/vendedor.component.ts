import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SelectModel } from 'src/app/components/select/model/select.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { SelectService } from 'src/app/shared/services/select.service';
import { VendedorPortletService } from './service/vendedor.service';

@Component({
  selector: 'app-portlet-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss'],
})
export class VendedorPortletComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;

  vendedor: SelectModel[];
  tecnico: SelectModel[];
  profissional: SelectModel[];
  pesquisa = {} as PesquisaModel;
  subscription: Subscription;

  constructor(
    private vendedorPortletService: VendedorPortletService,
    private selectService: SelectService
  ) {
    this.vendedor = [];
  }

  ngOnInit() {
    this.get();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  get() {
    if (this.control === 'tecnico') {
     this.subscription = this.vendedorPortletService.tecnicos$.subscribe((data: any) => {
        this.vendedor = this.selectService.handleSelect(
          data,
          'id',
          'nome_fantasia'
        );
      });
    } else {
     this.subscription = this.vendedorPortletService.profissionais$.subscribe((data: any) => {
        this.vendedor = this.selectService.handleSelect(
          data,
          'id',
          'nome_fantasia'
        );
      });
    }
  }

  getControlName() {
    return `${this.control}_nome`;
  }

  pesquisaVendedor() {
    if (this.control === 'tecnico') this.pesquisaTecnico();
    else this.pesquisaProfissional();
  }

  pesquisaTecnico() {
    this.vendedorPortletService.pesquisaTecnico.next({
      vendedor: this.pesquisa.vendedor,
    });
  }

  pesquisaProfissional() {
    this.vendedorPortletService.pesquisaProfissional.next({
      vendedor: this.pesquisa.vendedor,
    });
  }

  selecionaVendedor(vendedor) {
    const _control = this.control;
    let formValues = {};
    formValues[_control] = vendedor.value;
    formValues[this.getControlName()] = vendedor.description;
    this.form.patchValue(formValues);
    if (this.control === 'tecnico')
      this.vendedorPortletService.pesquisaTecnico.next('');
    else this.vendedorPortletService.pesquisaProfissional.next('');
  }
}
