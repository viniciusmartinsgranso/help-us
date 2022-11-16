import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockedUsers } from '../../../models/mocks/user.mock';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public readonly router: Router,
  ) {}

  public users: UserProxy[] = mockedUsers;

  public user: UserProxy;

  public isLoading: boolean = false;

  public occurrences: OccurrenceProxy[] = [];

  public occurrence: OccurrenceProxy;

  ngOnInit() {
    this.getCurrentUser();
    this.getUserOccurrences();
  }


  public getCurrentUser(): void {
    this.user = JSON.parse(localStorage.getItem('loggedUser'));
    console.log(this.user);
  }

  public getUserOccurrences(): void {
    const occurrences = localStorage.getItem('occurrences') ? JSON.parse(localStorage.getItem('occurrences')) : [];
    console.log(occurrences);

    this.occurrences = occurrences.filter(oc => oc.user.id === this.user.id);
    console.log(this.occurrences);
  }
}
