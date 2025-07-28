import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user$;

  constructor(private auth: AuthService) {
    this.user$ = this.auth.user$;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout().subscribe();
  }
}
