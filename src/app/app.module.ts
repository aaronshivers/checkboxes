import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { EmployeesComponent } from './employees/employees.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    EmployeesComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
