import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TicketStatusService } from '../../service/ticket-status.service';
import { TicketStatusEnum } from '../../model/ticket.model';

@Component({
  selector: 'app-ticket-status',
  templateUrl: './ticket-status.component.html',
  styleUrl: './ticket-status.component.css'
})
export class TicketStatusComponent implements OnInit {

  @Input() label: string = '';
  @Input() active: TicketStatusEnum | undefined;

  

  constructor(private renderer: Renderer2, private el: ElementRef, private ticketStatusService: TicketStatusService) { }

  ngOnInit(): void {
    this.label = this.ticketStatusService.getStatusMessage(this.label)!!

  }

  get isActive() {
    return this.label === this.ticketStatusService.getStatusMessage(this.active!!)!!; 
  }
}