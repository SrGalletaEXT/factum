import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'http://localhost:3000';
  user$ = new BehaviorSubject<{ steamid: string } | null>(null);

  constructor(private http: HttpClient) {
    this.fetchUser().subscribe();
  }

  fetchUser() {
    return this.http
      .get<{ steamid: string | null }>(`${this.api}/auth/user`, { withCredentials: true })
      .pipe(tap((u) => this.user$.next(u.steamid ? { steamid: u.steamid } : null)));
  }

  login() {
    window.location.href = `${this.api}/auth/steam`;
  }

  logout() {
    return this.http
      .get(`${this.api}/auth/logout`, { withCredentials: true })
      .pipe(tap(() => this.user$.next(null)));
  }
}
