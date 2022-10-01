import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserPayload, RegisterPayload } from '../../models/payloads/register.payload';
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
  ) { }

  ngOnInit() {
  }

  public registerPayload: RegisterPayload = {
    name: '',
    email: '',
    city: '',
    password: '',
    confirmPassword: '',
  };

  public isLoading: boolean = false;

  public async register(): Promise<void> {
    if(!this.canRegister()) return;
    this.isLoading = true;

    await this.router.navigate(['/home']);

    this.isLoading = false;
  }

  public canRegister(): boolean {
    if (isValidEmail(this.registerPayload.email) && isValidPassword(this.registerPayload.password) && isValidPassword(this.registerPayload.confirmPassword) && this.registerPayload.name.length > 6 && this.registerPayload.city.length > 3)
      return true;

    return false;
  }

}
