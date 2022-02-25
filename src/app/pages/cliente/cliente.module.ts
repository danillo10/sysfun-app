import { TablesModule } from './../../components/tables/tables.module';
import { ClienteComponent } from './cliente.page';
import { ClientePageRoutingModule } from './cliente-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'src/app/components';
@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    CommonModule,
    ClientePageRoutingModule,
    ButtonsModule,
    TablesModule
  ],
   exports: [
     ClienteComponent
    ]
})
export class ClienteModule { }
