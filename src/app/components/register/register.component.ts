import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User, UserProfileEnum } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { AuthDataService } from '../../service/auth-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user: User =  {
    id: undefined,
    name: '',
    documentNumber: '',
    documentType: 'CPF',
    login: '',
    password: '',
    profile: UserProfileEnum.USER
 }
 passwordCon: string = ''
  
  showPassword = false;
  showConfirmPassword = false;

  constructor(private authService: AuthService, private authDataService: AuthDataService, private userService: UserService, private toast: ToastrService, private router: Router) { }

  async register() {
    if (this.user.password !== this.passwordCon) {
      this.toast.error("As senhas não coincidem");
      return;
    }
    
    this.userService.create(this.user).subscribe(
      (res) => {
        this.toast.success("Cadastro realizado com sucesso!");
        this.authService.login(this.user.login, this.user.password).subscribe(
          (it: any) => {
            this.authDataService.setToken(it.data.token)
            this.router.navigate(["/home"]);
          }, error => {
            this.toast.error(error.error.message);
            this.router.navigate(["/auth"]);

          })

      },
      (err) => {
        this.toast.error(err.error.message);
      }
    );
  }

  isFormValid(): boolean {
    return (
      this.user.name !== "" &&
      this.user.login !== "" &&
      this.user.documentNumber !== "" &&
      this.user.password !== "" &&
      this.passwordCon !== ""
    );
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  toggleShowConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
