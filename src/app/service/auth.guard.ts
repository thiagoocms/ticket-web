import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { AuthDataService } from './auth-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authDataService: AuthDataService, private router: Router, private toast: ToastrService) {}

  canActivate(): boolean {
    if (this.authDataService.isTokenExpired()) {
      this.authDataService.logout();
      this.toast.warning("Sessão expirada")
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}