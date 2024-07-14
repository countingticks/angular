import { Component, input, output, computed } from '@angular/core';

import { type User } from './user.model'
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => {
    return `assets/users/${this.user().avatar}`
  });

  onSelectedUser = () => {
    this.select.emit(this.user().id);
  };
}