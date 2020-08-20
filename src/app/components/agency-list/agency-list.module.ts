import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyListComponent } from './agency-list.component';
import { AgencyListRoutingModule } from './agency-list-routing.module';

import { ComponentsModule } from '../components.module';


@NgModule({
  declarations: [AgencyListComponent],
  imports: [
    CommonModule,
    AgencyListRoutingModule,
    ComponentsModule
  ]
})
export class AgencyListModule { }
