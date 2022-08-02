import { TablesComponent } from './tables.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { StatusComponent } from '../status/status.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TablesComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],exports: [
    TablesComponent
  ],
})
export class TablesModule { }
