import { AdicionarPlanoPageRoutingModule } from './adicionar-plano-routing.module';
import { AdicionarPlanoComponent } from './adicionar-plano.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AdicionarPlanoComponent
  ],
  imports: [
    CommonModule,
    AdicionarPlanoPageRoutingModule
  ],
  exports: [
    AdicionarPlanoComponent
  ]
})
export class AdicionarPlanoModule { }
