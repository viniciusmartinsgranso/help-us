import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  public user = {
    imageUrl: '',
    name: '',
    role: '',
  };

  public isLoading: boolean = false;

  ngOnInit() {
  }

}
