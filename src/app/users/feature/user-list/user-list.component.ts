import { Component, OnInit } from '@angular/core';
import { UserService } from '../../data-access/user/user.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { User } from '../../../shared/types/user';
import { UserCardComponent } from '../../../shared/ui/user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users:User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((users:any) => {
      this.users = users.results;
    })
    console.log(this.users[0]);
  }
}
