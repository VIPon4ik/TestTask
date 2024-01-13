import { Component, OnInit } from '@angular/core';
import { SavedCardComponent } from '../../ui/saved-card/saved-card.component';
import { UserService } from '../../../users/data-access/user/user.service';
import { User } from '../../../shared/types/user';
import { ListComponent } from '../../../shared/ui/list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-list',
  standalone: true,
  imports: [ListComponent, CommonModule, SavedCardComponent],
  templateUrl: './saved-list.component.html',
  styleUrl: './saved-list.component.css'
})
export class SavedListComponent implements OnInit {
  savedUsers!: User[];

  ngOnInit(): void {
    this.savedUsers = this.userService.getSavedUsers()
  }

  constructor (private userService: UserService) {}
}
