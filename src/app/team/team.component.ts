import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../teams/team.service';
import { Team } from '../teams/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.css' ]
})
export class TeamComponent implements OnInit {
  team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {
  }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = +this.route.snapshot.params.id;

    this.teamService.getTeam(id)
      .subscribe((team: Team) => this.team = team);
  }
}
