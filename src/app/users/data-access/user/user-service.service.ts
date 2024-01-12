import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  savedUsers: any = [];

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get('https://randomuser.me/api/');
  }
}
