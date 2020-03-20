import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable, of } from 'rxjs';
import { Employee } from '../employees/employee';
import { EmployeeService } from '../employees/employee.service';

const TEAMS: Team[] = [
  {
    id: 1,
    name: 'team 1',
    lead: { id: 2, name: 'sally' },
    members: [
      { id: 1, name: 'bob' },
      { id: 2, name: 'sally' },
    ],
  },
  {
    id: 2,
    name: 'team 2',
    lead: { id: undefined, name: undefined },
    members: [
      { id: 1, name: 'bob' },
      { id: 3, name: 'doug' },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  teams: Team[] = TEAMS;

  constructor(
    private employeeService: EmployeeService
  ) {
  }

  getTeams(): Observable<Team[]> {
    return of(this.teams);
  }

  getTeam(id: number) {
    const teamIndex: number = this.getTeamIndex(id);
    const team: Team = this.teams[teamIndex];

    return of(team);
  }

  updateLead(teamId: number, leadId: number): void {
    const teamIndex: number = this.getTeamIndex(teamId);
    const team: Team = this.teams[teamIndex];

    const lead = this.employeeService.getEmployee(leadId);
    console.log(lead);
    team.lead = lead;
  }

  addMember(teamId: number, employee: Employee): void {
    const teamIndex: number = this.getTeamIndex(teamId);
    const team: Team = this.teams[teamIndex];

    team.members.push(employee);
  }

  removeMember(teamId: number, employee: Employee) {
    const teamIndex: number = this.getTeamIndex(teamId);
    const team: Team = this.teams[teamIndex];

    const memberIndex: number = this.getMemberIndex(team, employee.id);

    team.members.splice(memberIndex, 1);
  }

  private getTeamIndex(id: number): number {
    return this.teams.findIndex((team: Team) => team.id === id);
  }

  private getMemberIndex(team: Team, memberId: number): number {
    return team.members.findIndex((member: Employee) => member.id === memberId);
  }
}
