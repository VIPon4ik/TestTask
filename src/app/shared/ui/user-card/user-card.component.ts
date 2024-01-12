import { Component, Input } from '@angular/core';
import { User } from '../../types/user';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../../../button/button.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, ButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: User;

  onClick() {
    console.log('click')
  }
}
