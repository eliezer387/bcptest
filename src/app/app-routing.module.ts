import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/agencias',
    pathMatch: 'full'
  },
  {
    path: 'agencias',
    loadChildren:
    () => import('./components/agency-list/agency-list.module').then(m => m.AgencyListModule)
  },

  {
    path: 'details',
    loadChildren:
    () => import('./components/agency-details/agency-details.module').then(m => m.AgencyDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
