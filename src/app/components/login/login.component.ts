import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { AuthDataService } from '../../service/auth-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = {
    email: "",
    senha: ""

  }
  showPassword = false;

  constructor(private authService: AuthService, private authDataService: AuthDataService, private toast: ToastrService, private router: Router) { }

  async login() {
    this.authService.login(this.usuario.email, this.usuario.senha).subscribe(
      (res: any) => {
        const token = res.data.token;
        this.authDataService.setToken(token)

        this.toast.success(`Bem vindo!`)
        this.router.navigate(["/home"]);
      }, (err) => {
        this.toast.error(err.error.message)

      })
  }

  isFormValid(): boolean {
    return this.usuario.email !== "" && this.usuario.senha !== "";
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
