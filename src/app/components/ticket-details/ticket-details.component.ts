import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket, TicketStatusEnum } from '../../model/ticket.model';
import { TicketService } from '../../service/ticket.service';
import { TicketStatusComponent } from '../ticket-status/ticket-status.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent implements OnInit {

  id: number = 0
  ticket: Ticket | null = null;
  list: TicketStatusEnum[] = []


  TicketStatusEnum = TicketStatusEnum;
  constructor(private router: Router, private route: ActivatedRoute, private ticketService: TicketService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    if (isNaN(this.id)) {
      this.router.navigate(['/home'])
    }
    this.findById()
    this.findStatus()
  }

  findById() {
    this.ticketService.findById(this.id).subscribe(res => this.ticket = res.data, err => this.toast.error(err.error.message))
  }

  findStatus() {
    this.ticketService.findStatus().subscribe(res => this.list = res.data, err => this.toast.error(err.error.message))
  }




}
