import { Component, ViewChild, HostListener } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from '../../service/user.service';
import { AuthDataService } from '../../service/auth-data.service';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;
  isMobile: boolean = false;

  constructor(private authDataService: AuthDataService, private userService: UserService, private userDataService: UserDataService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 1000;
  }

  ngOnInit() {
    this.onResize(null);
    this.findUser();
    this.userService.isUserProfile()
  }

  toggleSidenav() {
    this.sidebarComponent.toggle();
  }

  findUser() {
    const login = this.authDataService.getLogin();
    this.userService.findByLogin(login).subscribe(
      res => {
        this.userDataService.setUser(res.data)
      }
    );
  }
}
