import { DashboardComponent } from './dashboard.page';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'src/app/components';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    ButtonsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
