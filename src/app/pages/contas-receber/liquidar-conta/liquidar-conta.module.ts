import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonsModule,
  CheckboxModule,
  IconsModule,
  InputsModule,
  PaginationModule,
  TablesModule,
} from 'src/app/components';
import { SelectModule } from 'src/app/components/select/select.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { LiquidarContaComponent } from './liquidar-conta.component';
import { LiquidarService } from './service/liquidar.service';

@NgModule({
  declarations: [
    LiquidarContaComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    ButtonsModule,
    InputsModule,
    TablesModule,
    CheckboxModule,
    PaginationModule,
    SelectModule,
    SharedModule
  ],
  exports: [
    LiquidarContaComponent
  ],
  providers: [
    LiquidarService
  ]
})
export class LiquidarContaModule { }
