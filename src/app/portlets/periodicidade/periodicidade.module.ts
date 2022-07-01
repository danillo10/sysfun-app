import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'src/app/components/select/select.module';
import { PeriodicidadeComponent } from './periodicidade.component';



@NgModule({
  declarations: [
    PeriodicidadeComponent
  ],
  imports: [
    CommonModule,
    SelectModule
  ],
  exports: [
    PeriodicidadeComponent
  ]
})
export class PeriodicidadeModule { }
