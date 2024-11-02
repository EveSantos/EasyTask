import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  selectUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectUserId)!;
  }

  onSelectUser(id: string) {
    this.selectUserId = id
  }
}
