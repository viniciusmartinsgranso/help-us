import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockedUsers } from '../../models/mocks/user.mock';
import { CreateUserPayload, RegisterPayload } from '../../models/payloads/register.payload';
import { UserProxy } from '../../models/proxies/user.proxy';
import { HelperService } from '../../services/helper';
import { CustomValidators } from '../../utils/validators';
import isValidEmail = CustomValidators.isValidEmail;
import isValidPassword = CustomValidators.isValidPassword;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public readonly router: Router,
    private readonly helper: HelperService,
  ) { }

  ngOnInit() {
  }

  public registerPayload: RegisterPayload = {
    id: 1,
    name: '',
    email: '',
    city: '',
    password: '',
    confirmPassword: '',
  };

  public userList: UserProxy[] = mockedUsers;

  public isLoading: boolean = false;

  public async register(): Promise<void> {
    if(!this.canRegister()) return;
    this.isLoading = true;

    this.userList.push(this.registerPayload);

    await this.router.navigate(['/home']);
    await this.helper.showToast('Bem vindo(a) ao Help-Us!');

    this.isLoading = false;
  }

  public canRegister(): boolean {
    if (isValidEmail(this.registerPayload.email) && isValidPassword(this.registerPayload.password) && isValidPassword(this.registerPayload.confirmPassword) && this.registerPayload.name.length > 6 && this.registerPayload.city.length > 3)
      return true;

    return false;
  }
}
