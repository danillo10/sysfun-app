import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NumberinputDirective } from '../../directives/numberinput.directive';

@NgModule({
  declarations: [
    NumberinputDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
