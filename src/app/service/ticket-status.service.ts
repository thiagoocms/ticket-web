import { Injectable } from '@angular/core';
import { TicketStatusEnum } from '../model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketStatusService {

  constructor() { }

  private isValidStatusKey(key: string | TicketStatusEnum): key is keyof typeof TicketStatusEnum {
    return key in TicketStatusEnum;
  }

  getStatusMessage(statusKey: string | TicketStatusEnum): string | undefined {
    if (this.isValidStatusKey(statusKey)) {
      return TicketStatusEnum[statusKey];
    }
    return undefined;
  }
}
