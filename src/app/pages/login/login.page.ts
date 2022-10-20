import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPayload } from '../../models/payloads/login.payload';
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
    email: '',
    password: '',
  };

  public isLoading = false;

  public showPasswordLogin: boolean = false;

  ngOnInit() {
  }

  public async login(): Promise<void> {
    if (!this.canLogin()) {return;}

    this.isLoading = true;

    /**
     * TODO
     * Implementar rota de autenticação de login
     */

    // const [isSuccess, message] = await this.authService.login(this.loginPayload.email, this.loginPayload.password);
    // this.isLoading = false;

    // if (isSuccess) {
    //   return void await this.router.navigate(['/home']);
    // } else {
    //   await this.helperService.showToast(message);
    //   return void await this.router.navigate(['/login']);
    // }

    // await this.helperService.showToast(message, 5_000);

    await this.router.navigate(['/home']);

    this.isLoading = false;
  }

  public canLogin(): boolean {
    if (isValidEmail(this.loginPayload.email) && isValidPassword(this.loginPayload.password))
      {return true;}

    return false;
  }

  public async invitedLogin(): Promise<void> {
    await this.helperService.showToast('Você entrou no modo convidado e não poderá publicar seu alerta no feed.', 1000);
    await this.router.navigate(['/home']);
  }

}
