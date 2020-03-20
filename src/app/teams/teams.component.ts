import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: [ './teams.component.css' ]
})
export class TeamsComponent implements OnInit, OnDestroy {
  teams: Team[];
  teamSubscription: Subscription;

  constructor(
    private teamService: TeamService
  ) {
  }

  ngOnInit() {
    this.getTeams();
  }

  ngOnDestroy(): void {
    this.teamSubscription.unsubscribe();
  }

  getTeams(): void {
    this.teamSubscription = this.teamService.getTeams()
      .subscribe((teams: Team[]) => this.teams = teams);
  }
}
