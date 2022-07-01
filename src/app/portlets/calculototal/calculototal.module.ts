import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculototalComponent } from './calculototal.component';
import { SelectModule } from 'src/app/components/select/select.module';



@NgModule({
  declarations: [
    CalculototalComponent
  ],
  imports: [
    CommonModule,
    SelectModule
  ],
  exports: [
    CalculototalComponent
  ]
})
export class CalculototalModule { }
