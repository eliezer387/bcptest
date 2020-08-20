import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyDetailsRoutingModule } from './agency-details-routing.module';
import { ComponentsModule } from '../components.module';
import { AgencyDetailsComponent } from './agency-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgencyDetailsComponent],
  imports: [
    CommonModule,
    AgencyDetailsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ]
})
export class AgencyDetailsModule { }
