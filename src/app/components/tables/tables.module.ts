import { TablesComponent } from './tables.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { StatusModule } from '../status/status.module';
import { StatusComponent } from '../status/status.component';

@NgModule({
  declarations: [
    TablesComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],exports: [
    TablesComponent
  ],
})
export class TablesModule { }
