import { Component, Input } from '@angular/core';
import { User } from '../../../shared/types/user';
import { CardComponent } from '../../../shared/ui/card/card.component';

@Component({
  selector: 'app-saved-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './saved-card.component.html',
  styleUrl: './saved-card.component.css'
})
export class SavedCardComponent {
  @Input() user!: User;
}
