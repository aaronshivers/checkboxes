import { Injectable } from '@angular/core';
import { Team } from './team';
import { Observable, of } from 'rxjs';

const TEAMS: Team[] = [
  {
    id: 1, name: 'team 1', members: [
      { id: 1, name: 'bob' },
      { id: 2, name: 'sally' },
    ]
  },
  {
    id: 2, name: 'team 2', members: [
      { id: 1, name: 'bob' },
      { id: 3, name: 'doug' },
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams: Team[] = TEAMS;

  constructor() {
  }

  getTeams(): Observable<Team[]> {
    return of(this.teams);
  }

  getTeam(id: number) {
    const teamIndex: number = this.getTeamIndex(id);
    const team: Team = this.teams[teamIndex];

    return of(team);
  }

  private getTeamIndex(id: number): number {
    return this.teams.findIndex(team => team.id === id);
  }
}
