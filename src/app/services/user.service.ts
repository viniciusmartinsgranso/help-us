import { Injectable } from '@angular/core';
import { CreateUserPayload } from '../models/payloads/register.payload';
import { UserProxy } from '../models/proxies/user.proxy';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public usersList: UserProxy[] = [];

  public user: CreateUserPayload[] = [
    {
      name: '',
      password: '',
      email: ''
    }
  ];

  public getUsers(): void {
    this.usersList = JSON.parse(localStorage.getItem('users'));

    if (!this.usersList) {
      localStorage.setItem('users', JSON.stringify(this.user));
    }
  }

  public createUser(user: CreateUserPayload): void {
    const storage = JSON.parse(localStorage.getItem('users'));
    storage.push(user);
    localStorage.setItem('users', JSON.stringify(storage));
  }

  public onUpdateUser(user: UserProxy): void {
    const storage = JSON.parse(localStorage.getItem('users'));

    storage.push(user[0]);
    localStorage.setItem('users', JSON.stringify(storage));
  }

  public async onDeleteUser(user: number): Promise<void> {
    const storage = JSON.parse(localStorage.getItem('users'));
    console.log(storage);

    const newList = storage.filter(userStorage => {
      if (userStorage.id !== user) {
        return userStorage;
      }
    });

    storage.push(newList);
    localStorage.setItem('users', JSON.stringify(newList));
  }
}
