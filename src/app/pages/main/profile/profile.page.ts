import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(
    public readonly router: Router,
  ) {
    this.getCurrentUser();
  }

  public user: UserProxy;

  public isLoading: boolean = false;

  public occurrences: OccurrenceProxy[] = [];

  public async ionViewDidEnter(): Promise<void> {
    await this.getUserOccurrences();
  }

  public getCurrentUser(): void {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
  }

  public async getUserOccurrences(): Promise<void> {
    this.occurrences = [];
    const occurrences = localStorage.getItem('occurrences') ? JSON.parse(localStorage.getItem('occurrences')) : [];
    console.log(occurrences, 'occurrences');

    const logs = occurrences.filter(oc => oc.user.id === this.user.id);
    console.log(logs, 'logs');
    this.occurrences.push(logs);
  }
}
