import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../model/Response.model';
import { Ticket, TicketStatusEnum } from '../model/ticket.model';
import { Service } from './service.service';
import { AuthDataService } from './auth-data.service';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends Service {

  localUrl = this.url + "/v1/tickets"

  constructor(private http: HttpClient, authDataService: AuthDataService, userDataService: UserDataService) {
    super(authDataService, userDataService);
  }

  findAll(): Observable<Response<Ticket[]>> {
    let params: HttpParams = new HttpParams()
    if (this.isUserProfile()) {
      params = params.append('userId', this.getUserId()!!);
    }
    return this.http.get<Response<Ticket[]>>(this.localUrl, { params, headers: this.getHeaders() })
  }

  findById(id: number): Observable<Response<Ticket>> {
    return this.http.get<Response<Ticket>>(`${this.localUrl}/${id}`, { headers: this.getHeaders() })
  }

  findStatus(): Observable<Response<TicketStatusEnum[]>> {
    return this.http.get<Response<TicketStatusEnum[]>>(`${this.localUrl}/status`, { headers: this.getHeaders() })
  }

  create(ticket: Ticket): Observable<Response<Ticket>> {
    return this.http.post<Response<Ticket>>(this.localUrl, ticket, { headers: this.getHeaders() })
  }

}
