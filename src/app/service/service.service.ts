import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthDataService } from './auth-data.service';
import { API_CONFIG } from '../utils';
import { UserDataService } from './user-data.service';
import { UserProfileEnum } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class Service implements OnInit{

  url = API_CONFIG.BASE_URL

  constructor(private authDataService: AuthDataService, private userDataService: UserDataService) { }
  ngOnInit(): void {
    this.isUserProfile()
  }

   getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authDataService.getToken()}`
    });
  }

  getHeadersNoAuth(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  isUserProfile(): Boolean {
    const user = this.userDataService.getUser();
    if(user && user.profile === UserProfileEnum.USER) {
      return true
    }
    return false
  }

  getUserId(): number | undefined{
    return this.userDataService.getUser()?.id
  }
}
