import { Injectable } from '@angular/core';
import { Service } from './service.service';
import { HttpClient } from '@angular/common/http';
import { AuthDataService } from './auth-data.service';
import { UserDataService } from './user-data.service';
import { Observable } from 'rxjs';
import { Response } from '../model/Response.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Service {

  localUrl = this.url + "/v1/categories"

  constructor(private http: HttpClient, authDataService: AuthDataService, userDataService: UserDataService) {
    super(authDataService, userDataService)
  }

  findAll(): Observable<Response<Category[]>> {
    return this.http.get<Response<Category[]>>(this.localUrl, { headers: this.getHeaders() })
  }
}
