import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyListComponent } from './components/agency-list/agency-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AgencyListComponent,
    DashboardComponent,
    LoadingComponent,
    AgencyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
}
