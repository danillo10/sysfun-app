import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputsModule } from 'src/app/components';

import { IndicacaoPortletComponent } from './indicacao.component';

@NgModule({
  declarations: [
    IndicacaoPortletComponent
  ],
  imports: [
    CommonModule,
    InputsModule
  ],
  exports: [
    IndicacaoPortletComponent
  ]
})
export class IndicacaoPortletsModule { }
