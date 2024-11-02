import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { GLOBAL } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  setUser(user: User): void {
    localStorage.setItem(GLOBAL.USER_KEY, JSON.stringify(user));
  }

  getUser(): User {
    const json: string | null = localStorage.getItem(GLOBAL.USER_KEY);
    return json ? JSON.parse(json) : null;
  }
}
