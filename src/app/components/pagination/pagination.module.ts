import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { PaginationComponent } from './pagination.component';


@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
