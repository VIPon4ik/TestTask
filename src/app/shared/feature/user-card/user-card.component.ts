import { Component, Input } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: User;

  onClick() {
    console.log('click from userCard')
  }
}
