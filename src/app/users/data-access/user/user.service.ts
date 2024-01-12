import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../shared/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS_API: Readonly<string> = 'https://randomuser.me/api/';
  USERS_PARAMS: Readonly<string> = '?results=20&inc=name,gender,picture,location,email'

  savedUsers: User[] = [];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get(`${this.USERS_API}${this.USERS_PARAMS}`);
  }
}
