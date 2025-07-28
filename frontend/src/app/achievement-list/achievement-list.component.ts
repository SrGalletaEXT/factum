import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteamService } from '../steam.service';

@Component({
  selector: 'app-achievement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement-list.component.html',
  styleUrl: './achievement-list.component.scss'
})
export class AchievementListComponent implements OnInit {
  achievements: any[] = [];

  constructor(private steam: SteamService) {}

  ngOnInit(): void {
    const id = '1';
    this.steam
      .getPlayerAchievements(id)
      .subscribe((data) => (this.achievements = data));
  }
}
