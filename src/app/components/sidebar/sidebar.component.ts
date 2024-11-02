import { Component, HostListener, Input, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserDataService } from '../../service/user-data.service';
import { UserProfileEnum } from '../../model/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  isMobile: boolean = false;
  isVisible: boolean = false;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.onResize(null);
    setTimeout(()=> {
      this.verifyProfile()
     }, 100)
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 1000;

  }

  toggle() {
    this.sidenav.toggle();
  }

  verifyProfile() {
    const user = this.userDataService.getUser()
    if(user && user.profile == UserProfileEnum.ADMIN) {
      this.isVisible = true
    }
  }


}
