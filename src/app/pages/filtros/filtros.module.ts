import { FiltrosPageRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    FiltrosPageRoutingModule
  ],
  exports: [
    FiltrosComponent
  ]
})
export class FiltrosModule { }
