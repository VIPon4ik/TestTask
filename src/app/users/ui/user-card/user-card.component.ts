import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card.component';
import { User } from '../../../shared/types/user';
import { UserService } from '../../data-access/user/user.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: User;
  
  savedUsers: User[] = this.userService.getSavedUsers();
  isUserIsSaved: boolean = this.userService.getSavedUsers().includes(this.user);

  constructor (private userService: UserService) {}

  toggleSave = () => {
    if (this.isUserIsSaved) {
      this.userService.removeUser(this.user);
    } else {
      this.userService.saveUser(this.user);
    }
    
    this.isUserIsSaved = !this.isUserIsSaved; 
  }
}
