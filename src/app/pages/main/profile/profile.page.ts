import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';
import { OccurrenceService } from '../../../services/occurrence.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  public user: UserProxy;

  public isLoading: boolean = false;

  public occurrences: OccurrenceProxy[] = [];

  public isInvitedUser: boolean = false;

  constructor(
    public readonly router: Router,
    private readonly occurrenceService: OccurrenceService,
  ) {
    this.getCurrentUser();

    this.getUserOccurrences();
  }

  public async ionViewDidEnter(): Promise<void> {
  }

  public getCurrentUser(): void {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));

    if (this.user.email === '') {
      this.isInvitedUser = true;
    }
  }

  public getUserOccurrences(): void {
    this.occurrences = [];
    const occurrences = this.occurrenceService.get();

    const logs = occurrences.filter(oc => oc.user.id === this.user.id);
    this.occurrences.push(...logs);
  }
}
