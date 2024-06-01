import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage {

  constructor(
    private readonly router: Router,
  ) { }

  public async logoutUser(): Promise<void> {
    localStorage.removeItem('loggedUser');
    await this.router.navigateByUrl('/login');
  }

  public async onFeedRoute(): Promise<void> {
    await this.router.navigateByUrl('/feed');
  }

}
