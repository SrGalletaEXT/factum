import { Routes } from '@angular/router';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { GameListComponent } from './game-list/game-list.component';
import { AchievementListComponent } from './achievement-list/achievement-list.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'profile/1', pathMatch: 'full' },
  { path: 'profile/:steamId', component: PlayerProfileComponent },
  { path: 'games/:steamId', component: GameListComponent },
  { path: 'achievements/:steamId', component: AchievementListComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
];
