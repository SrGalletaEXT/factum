import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteamService } from '../steam.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  games: any[] = [];

  constructor(private steam: SteamService) {}

  ngOnInit(): void {
    const id = '1';
    this.steam.getPlayerGames(id).subscribe((data) => (this.games = data));
  }
}
