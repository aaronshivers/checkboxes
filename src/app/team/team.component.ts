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
  styleUrls: [ './team.component.css' ],
})
export class TeamComponent implements OnInit, OnDestroy {
  team: Team;
  employees: Employee[];
  teamSubscription: Subscription;
  employeeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private employeeService: EmployeeService,
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

  onUpdateMember(employee: Employee): void {
    if (this.isMember(employee.id)) {
      this.teamService.removeMember(this.team.id, employee);
    } else {
      this.teamService.addMember(this.team.id, employee);
    }
  }

  isMember(id: number): boolean {
    return this.team.members.findIndex(member => member.id === id) >= 0;
  }

  onUpdateLead(event: any) {
    const leadId: number = event.target.value;
    this.teamService.updateLead(this.team.id, leadId);
  }
}
