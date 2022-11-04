import { Injectable } from '@angular/core';
import { LoginPayload } from '../models/payloads/login.payload';
import { CreateUserPayload } from '../models/payloads/register.payload';
import { UserProxy } from '../models/proxies/user.proxy';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() { }

  public user: CreateUserPayload[] = [
    {
      name: '',
      password: '',
      email: '',
    },
  ];

  public get(): void {
    const list = JSON.parse(localStorage.getItem('users'));

    if (!list) {
      localStorage.setItem('users', JSON.stringify(this.user));
    }
  }

  public create(user: CreateUserPayload): void {
    const storageUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    storageUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storageUsers));
    localStorage.setItem('loggedUser', JSON.stringify(user));
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

  public login(user: LoginPayload): boolean {
    localStorage.removeItem('loggedUser');
    const storage = JSON.parse(localStorage.getItem('users'));

    console.log(storage);
    const loggedUser = storage.map(currentUser => {
      if (currentUser.email === user.email && currentUser.password === user.password) {
        console.log(currentUser);
        return currentUser;
      }
    });

    console.log(loggedUser);
    if(loggedUser[1] === undefined) {
      return false;
    } else {
      localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
      return true;
    }
  }
}
