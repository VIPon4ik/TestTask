import { Injectable } from '@angular/core';
import { User } from '../../../shared/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS_API: Readonly<string> = 'https://randomuser.me/api/';
  USERS_PARAMS: Readonly<string> = '?results=20&inc=name,gender,picture,location,email'

  savedUsers: User[] = [];

  constructor() { }

  async fetchUsers() {
    return await fetch(`${this.USERS_API}${this.USERS_PARAMS}`).then(res => res.json()).then(data => data.results);
  }
}
