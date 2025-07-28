import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteamService {
  private readonly apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPlayerProfile(steamId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/players/${steamId}`);
  }

  getPlayerGames(steamId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players/${steamId}/games`);
  }

  getPlayerAchievements(steamId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/players/${steamId}/achievements`);
  }

  getLeaderboard(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/leaderboard`);
  }
}
