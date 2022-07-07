import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SituacaoModule } from 'src/app/portlets/situacao/situacao.module';
import { FiltroPlanoComponent } from './filtro.plano.component';
import { FiltroPlanoService } from './service/filtro.plano.service';

@NgModule({
  declarations: [
    FiltroPlanoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroPlanoComponent
  ],
  providers: [
    FiltroPlanoService
  ]
})
export class FiltroContaModule { }
