import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento.component';
import { SelectModule } from 'src/app/components/select/select.module';



@NgModule({
  declarations: [
    PagamentoComponent
  ],
  imports: [
    CommonModule,
    SelectModule
  ],
  exports: [
    PagamentoComponent
  ]
})
export class PagamentoModule { }
