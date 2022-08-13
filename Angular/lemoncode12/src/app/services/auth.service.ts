import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuth } from '../model/UserAuth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  public currentUser: UserAuth;

  constructor(private http: HttpClient) {
    this.currentUser = {
      username: '',
      password: '',
    };
  }

  login(username: string, password: string): boolean {
    if (username === 'curso' && password === 'angular') {
      localStorage.setItem('currentUser', JSON.stringify(username));
      this.isLoggedIn = true;
      // this.user.username = username;
      // this.user.password = password;
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }

  isLogged(): boolean {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
      return this.isLoggedIn;
    } else {
      return true;
    }
  }

  getUsername(): string {
    return this.currentUser.username;
  }
}