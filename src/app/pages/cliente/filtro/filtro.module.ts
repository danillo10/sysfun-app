import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FiltroComponent } from './filtro.component';
import { FiltrosService } from './service/filtro.service';

@NgModule({
  declarations: [
    FiltroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FiltroComponent
  ],
  providers: [
    FiltrosService
  ]
})
export class FiltrosModule { }
