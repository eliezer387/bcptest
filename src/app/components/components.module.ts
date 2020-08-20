import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const Components = [
  LoadingComponent,
  DashboardComponent
];

@NgModule({
  declarations: [
    Components
  ],
  exports: [Components],
  providers: [],
})
export class ComponentsModule {
  constructor(){
  }
}
