import { Component, OnInit } from '@angular/core';
import { mockedUsers } from '../../../models/mocks/user.mock';
import { OccurrenceProxy } from '../../../models/proxies/occurrence.proxy';
import { UserProxy } from '../../../models/proxies/user.proxy';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() {
    // this.occurrences = [];
    // const occurrence = this.occurrences.find(user => user.user === this.user.name);
    // console.log(occurrence);
    // this.occurrences.push(occurrence);
  }

  public users: UserProxy[] = mockedUsers;

  public user: UserProxy;

  public isLoading: boolean = false;

  public occurrences: OccurrenceProxy[] = [];

  public occurrence: OccurrenceProxy;

  ngOnInit() {
    this.getCurrentUser();
  }


  public getCurrentUser(): void {
    const user = localStorage.getItem('loggedUser');
    console.log(user);
  }

}
