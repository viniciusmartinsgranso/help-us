import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserPayload, RegisterPayload } from '../../models/payloads/register.payload';

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

  public user: RegisterPayload = {
    name: '',
    email: '',
    city: '',
    password: '',
    confirmPassword: '',
  };

}
