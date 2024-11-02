import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { AuthDataService } from '../../service/auth-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authDataService: AuthDataService, private router: Router){}

  logout() {
    this.authDataService.logout()
    this.router.navigate(["/auth/login"]);
  }

  home() {
    this.router.navigate(["/home"]);
  }

}
