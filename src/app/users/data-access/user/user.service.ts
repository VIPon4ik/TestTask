import { Injectable } from '@angular/core';
import { User } from '../../../shared/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS_API: Readonly<string> = 'https://randomuser.me/api/';
  USERS_PARAMS: Readonly<string> = '?results=20&inc=name,gender,picture,location,email'

  savedUsers: User[] =  JSON.parse(localStorage.getItem('users') ?? '[]');

  async fetchUsers() {
    return await fetch(`${this.USERS_API}${this.USERS_PARAMS}`).then(res => res.json()).then(data => data.results);
  }

  saveUser = (user: User) => {
    this.savedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(this.savedUsers));
  }

  removeUser = (user: User) => {
    this.savedUsers = this.savedUsers.filter(u => u !== user);
    localStorage.setItem('users', JSON.stringify(this.savedUsers))
  }

  getSavedUsers = () => {
    return this.savedUsers;
  }
}
