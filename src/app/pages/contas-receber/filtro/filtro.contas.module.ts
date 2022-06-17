import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CidadeModule } from 'src/app/portlets/cidade/cidade.module';

import { FiltroContasComponent } from './filtro.contas.component';
import { FiltroContaService } from './service/filtro.conta.service';

@NgModule({
  declarations: [
    FiltroContasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroContasComponent
  ],
  providers: [
    FiltroContaService
  ]
})
export class FiltroContaModule { }
