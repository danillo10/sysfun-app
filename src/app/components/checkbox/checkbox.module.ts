import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }
