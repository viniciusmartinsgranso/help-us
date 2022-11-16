import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPayload } from '../../models/payloads/login.payload';
import { RegisterPayload } from '../../models/payloads/register.payload';
import { HelperService } from '../../services/helper';
import { UserService } from '../../services/user.service';
import { CustomValidators } from '../../utils/validators';
import isValidEmail = CustomValidators.isValidEmail;
import isValidPassword = CustomValidators.isValidPassword;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public readonly router: Router,
    private readonly helperService: HelperService,
    private readonly userService: UserService,
  ) { }


  public loginPayload: LoginPayload = {
    id: 0,
    email: '',
    password: '',
    city: '',
    name: '',
  };

  public invitedUser: RegisterPayload = {
    id: 0,
    name: 'Usuário',
    email: '',
    city: '',
    password: '',
    confirmPassword: ''
  };

  public isLoading = false;

  public showPasswordLogin: boolean = false;

  ngOnInit() {
  }

  public async login(): Promise<void> {
    if (!this.canLogin()) {return;}

    this.isLoading = true;

    const user = this.userService.login(this.loginPayload);
    if (user) {
      this.isLoading = false;
      await this.router.navigate(['/home']);
    } else {
      this.isLoading = false;
      return void await this.helperService.showToast('Usuário ou senha incorreta!');
    }
  }

  public canLogin(): boolean {
    if (isValidEmail(this.loginPayload.email) && isValidPassword(this.loginPayload.password))
      return true;

    return false;
  }

  public async invitedLogin(): Promise<void> {
    const lastItem = JSON.parse(localStorage.getItem('users'));
    if (!lastItem) {
      this.invitedUser.id = 0;
    }
    else {
      this.invitedUser.id = lastItem[lastItem.length - 1].id + 1;
    }

    this.userService.invitedLogin(this.invitedUser);
    await this.helperService.showToast('Você entrou no modo convidado e suas informações de usuário serão padrões.', 1000);
    await this.router.navigate(['/home']);
  }

}
