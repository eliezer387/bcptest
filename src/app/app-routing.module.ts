import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyListComponent } from './components/agency-list/agency-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: '',
    component: AgencyListComponent,
  },
  {
    path: 'details',
    component: AgencyDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
