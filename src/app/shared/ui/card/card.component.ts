import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, ButtonComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() content!: string;
  @Input() subcontent!: string;
  @Input() picture!: string;
  @Input() withButton: boolean = false;
  @Input() buttonText!: string;
  @Input() buttonType: 'button' | 'submit' = 'button';
  @Input() buttonEvent!: () => void;
}
