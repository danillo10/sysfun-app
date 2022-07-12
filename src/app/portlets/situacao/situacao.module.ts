import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituacaoComponent } from './situacao.component';
import { SelectModule } from 'src/app/components/select/select.module';

@NgModule({
  declarations: [
    SituacaoComponent
  ],
  imports: [
    CommonModule,
    SelectModule
  ],
  exports: [
    SituacaoComponent
  ]
})
export class SituacaoModule { }
