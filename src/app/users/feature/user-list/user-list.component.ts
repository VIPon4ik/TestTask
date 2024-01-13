import { Component, OnInit } from '@angular/core';
import { UserService } from '../../data-access/user/user.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { User } from '../../../shared/types/user';
import { UserCardComponent } from '../../ui/user-card/user-card.component';
import { WeatherService } from '../../data-access/weather/weather.service';
import { ListComponent } from '../../../shared/ui/list/list.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule, UserCardComponent, ListComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users:User[] = [];

  constructor(private userService: UserService, private weatherService: WeatherService) {}

  async ngOnInit() {
    this.users = await this.weatherService.getUsersWithWeather(await this.userService.fetchUsers());
    console.log(this.users);
  }
}
