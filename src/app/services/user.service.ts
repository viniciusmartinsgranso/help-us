import { Injectable } from '@angular/core';
import { LoginPayload } from '../models/payloads/login.payload';
import { CreateUserPayload, RegisterPayload } from '../models/payloads/register.payload';
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

  public create(user: Omit<RegisterPayload, 'password'>): boolean {
    localStorage.removeItem('loggedUser');
    const storageUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    const userWithSameEmail = storageUsers.find(us => us.email === user.email);

    if (userWithSameEmail) {
      return false;
    }

    const newUser: UserProxy = {
      ...user,
      id: storageUsers.length > 0 ? storageUsers[storageUsers.length - 1].id + 1 : 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    storageUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storageUsers));
    localStorage.setItem('loggedUser', JSON.stringify(newUser));
    return true;
  }

  public update(user: UserProxy): void {
    const storage = JSON.parse(localStorage.getItem('users'));

    storage.push(user[0]);
    localStorage.setItem('users', JSON.stringify(storage));
  }

  public async delete(user: number): Promise<void> {
    const storage = JSON.parse(localStorage.getItem('users'));

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

    if (!storage) {
      return false;
    }

    const loggedUser = storage.find(currentUser => currentUser.email === user.email && currentUser.password === user.password);

    if (!loggedUser) {
      return false;
    } else {
      localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
      return true;
    }
  }

  public invitedLogin(user: CreateUserPayload): void {
    localStorage.removeItem('loggedUser');
    const storageUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    storageUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storageUsers));
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }
}
