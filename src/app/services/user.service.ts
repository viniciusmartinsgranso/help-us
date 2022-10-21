import { Injectable } from '@angular/core';
import { CreateUserPayload } from '../models/payloads/register.payload';
import { UserProxy } from '../models/proxies/user.proxy';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public user: CreateUserPayload[] = [
    {
      name: '',
      password: '',
      email: ''
    }
  ];

  public get(): void {
    const list = JSON.parse(localStorage.getItem('users'));

    if (!list) {
      localStorage.setItem('users', JSON.stringify(this.user));
    }
  }

  public create(user: CreateUserPayload): void {
    const storageUsers = JSON.parse(localStorage.getItem('users'));
    const localUser = JSON.parse(localStorage.getItem('loggedUser'));
    localUser.push(user);
    storageUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storageUsers));
    localStorage.setItem('loggedUser', JSON.stringify(localUser));
  }

  public update(user: UserProxy): void {
    const storage = JSON.parse(localStorage.getItem('users'));

    storage.push(user[0]);
    localStorage.setItem('users', JSON.stringify(storage));
  }

  public async delete(user: number): Promise<void> {
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
