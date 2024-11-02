import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Response } from '../model/Response.model';
import { AuthDataService } from './auth-data.service';
import { Service } from './service.service';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends Service {

  localUrl = this.url + "/v1/users"

  constructor(private http: HttpClient, authDataService: AuthDataService, userDataService: UserDataService) {
    super(authDataService, userDataService)
  }

  create(rep: User): Observable<Response<User>> {
    return this.http.post<Response<User>>(this.localUrl, rep, { headers: this.getHeadersNoAuth() })
  }

  findByLogin(login: string): Observable<Response<User>> {
    const local = `${this.localUrl}/by-login/${login}`
    return this.http.get<Response<User>>(local, { headers: this.getHeaders() })
  }

}
