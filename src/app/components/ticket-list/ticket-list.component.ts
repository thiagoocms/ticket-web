import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../service/ticket.service';
import { Ticket, TicketStatusEnum } from '../../model/ticket.model';
import { ToastrService } from 'ngx-toastr';
import { TicketStatusService } from '../../service/ticket-status.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'status', 'description', 'waitingDate', 'createdDate'];
  dataSource: Ticket[] = [];

  constructor(private ticketService: TicketService, private toast: ToastrService, private ticketStatusService: TicketStatusService) { }

  ngOnInit(): void {
      this.findAll()
  }

  findAll() {
    this.ticketService.findAll().subscribe(
      res => {
        this.dataSource = res.data
      },
      err => {
        this.toast.error(err.error.message)
      }
    )
  }

  getStatusMessage(statusKey: string): string | undefined {
    return this.ticketStatusService.getStatusMessage(statusKey)
  }

}
