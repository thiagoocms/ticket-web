import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../model/auth.model';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { Response } from '../model/Response.model';
import { Service } from './service.service';
import { AuthDataService } from './auth-data.service';
import { UserDataService } from './user-data.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService extends Service {

  localUrl = this.url + "/v1/auth"

  constructor(private http: HttpClient, authDataService: AuthDataService, userDataService: UserDataService) {
    super(authDataService, userDataService)
  }

  login(email: string, password: string): Observable<Response<Token>> {

    let pass = `${email}:${password}`
    let auth: Auth = {
      auth: btoa(pass)
    }
    return this.http.post<Response<Token>>(this.localUrl, auth, { headers: this.getHeadersNoAuth() })
  }
}