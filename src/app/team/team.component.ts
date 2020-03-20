import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../teams/team.service';
import { Team } from '../teams/team';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../employees/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.css' ]
})
export class TeamComponent implements OnInit, OnDestroy {
  team: Team;
  employees: Employee[];
  teamSubscription: Subscription;
  employeeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.getTeam();
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe();
    this.teamSubscription.unsubscribe();
  }

  getTeam(): void {
    const id = +this.route.snapshot.params.id;

    this.teamSubscription = this.teamService.getTeam(id)
      .subscribe((team: Team) => {
        this.team = team;
        this.getEmployees();
      });
  }

  getEmployees(): void {
    this.employeeSubscription = this.employeeService.getEmployees()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
      });
  }
}
