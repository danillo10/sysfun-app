import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUpperCaseDirectiveModule } from 'ngx-upper-case-directive';

import { NumberinputDirective } from '../../directives/numberinput.directive';

@NgModule({
  declarations: [
    NumberinputDirective
  ],
  imports: [
    CommonModule,
    NgxUpperCaseDirectiveModule
  ],
  exports : [
    ReactiveFormsModule,
    HttpClientModule,
    NgxUpperCaseDirectiveModule,
  ]
})
export class SharedModule { }
