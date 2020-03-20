import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { EmployeesComponent } from './employees/employees.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'teams/:id', component: TeamComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
