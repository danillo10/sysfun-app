import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './status.component';
import { SelectModule } from 'src/app/components/select/select.module';

@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    SelectModule
  ],
  exports: [
    StatusComponent
  ]
})
export class StatusModule { }
