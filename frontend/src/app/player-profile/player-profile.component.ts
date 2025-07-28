import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteamService } from '../steam.service';

@Component({
  selector: 'app-player-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-profile.component.html',
  styleUrl: './player-profile.component.scss'
})
export class PlayerProfileComponent implements OnInit {
  player: any;

  constructor(private steam: SteamService) {}

  ngOnInit(): void {
    // Placeholder steamId
    const id = '1';
    this.steam.getPlayerProfile(id).subscribe((data) => (this.player = data));
  }
}
