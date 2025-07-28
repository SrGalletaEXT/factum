import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteamService } from '../steam.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit {
  leaderboard: any[] = [];

  constructor(private steam: SteamService) {}

  ngOnInit(): void {
    this.steam.getLeaderboard().subscribe((data) => (this.leaderboard = data));
  }
}
