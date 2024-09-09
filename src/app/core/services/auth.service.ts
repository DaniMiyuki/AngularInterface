import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { username: string, password: string, email: string }[] = [];
  isAuthenticated: boolean = false;

  constructor() {}

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  signup(username: string, password: string, email: string): boolean {
    const userExists = this.users.some(u => u.username === username);
    if (!userExists) {
      this.users.push({ username, password, email });
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
