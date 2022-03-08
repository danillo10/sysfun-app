import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FiltroComponent } from './filtro.component';
import { FiltrosService } from './filtro.service';

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
