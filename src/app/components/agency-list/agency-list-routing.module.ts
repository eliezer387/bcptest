import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyListComponent } from './agency-list.component';

const routes: Routes = [{ path: '', component: AgencyListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule]
})
export class AgencyListRoutingModule { }
