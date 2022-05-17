import { TablesComponent } from './tables.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    TablesComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],exports: [
    TablesComponent
  ],
})
export class TablesModule { }
