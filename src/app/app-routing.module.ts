import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';


const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      { 
        path: '**', 
        redirectTo: 'login' 
      }
    ]
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: "tickets",
        canActivate: [AuthGuard],
        component: TicketListComponent,
       
      }, {
        path: "tickets/form",
        canActivate: [AuthGuard],
        component: TicketFormComponent
      },
      {
        path: "tickets/:id",
        canActivate: [AuthGuard],
        component: TicketDetailsComponent
      },
      { 
        path: '**', 
        redirectTo: 'tickets' 
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'home' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
