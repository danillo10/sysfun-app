import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule, IconsModule } from 'src/app/components';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.page';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    ButtonsModule,
    NavbarModule,
    IconsModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
