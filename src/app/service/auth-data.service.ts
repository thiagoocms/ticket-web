import { Injectable } from '@angular/core';
import { AUTH, GLOBAL } from '../utils';
import * as JwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(AUTH.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(AUTH.TOKEN_KEY);
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    try {
      const { exp } = JwtDecode.jwtDecode<{ exp: number }>(token);
      if (!exp) return true;
      const currentTime = Math.floor(Date.now() / 1000);
      return currentTime > exp;
    } catch (error) {
      return true;
    }
  }

  getLogin(): string {
    const token = this.getToken();
    if (!token) return ""
    try {
      const { sub } = JwtDecode.jwtDecode<{ sub: string }>(token);
      return sub
    } catch (error) {
      return ""
    }

  }
  logout(): void {
    localStorage.removeItem(AUTH.TOKEN_KEY);
    localStorage.removeItem(GLOBAL.USER_KEY);

  }
}
