import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: [ './teams.component.css' ]
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(
    private teamService: TeamService
  ) {
  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
      .subscribe((teams: Team[]) => this.teams = teams);
  }
}