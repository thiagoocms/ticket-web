import { Component, OnInit } from '@angular/core';
import { Ticket, TicketStatusEnum } from '../../model/ticket.model';
import { User } from '../../model/user.model';
import { Category } from '../../model/category.model';
import { CategoryService } from '../../service/category.service';
import { TicketService } from '../../service/ticket.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent implements OnInit {

  ticket: Ticket = {
    id: undefined,
    title: '',
    description: '',
    status: undefined,
    waitingDate: undefined,
    userId: this.categoryService.getUserId(),
    categoryId: 0,
    finishedDate: undefined,
    createdDate: undefined,
    user: undefined,
    employee: undefined,
    category: undefined
  };

  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private ticketService: TicketService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.findCategory()
  }



  createTicket() {
    this.ticketService.create(this.ticket).subscribe(res => {
      this.toast.success('Ticket criado com sucesso!')
      this.router.navigate(["/home"]);
    }, err => this.toast.error(err.error.message))
  }

  findCategory() {
    this.categoryService.findAll().subscribe(res => this.categories = res.data)
  }

}
