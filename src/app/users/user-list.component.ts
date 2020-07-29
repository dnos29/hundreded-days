import { Component } from '@angular/core';
import { users, User } from '../user.model';

@Component({
  selector: `app-user-list`,
  template: `<div>
    <app-user-item *ngFor="let user of users" [user]="user" (select)="onSelected($event)" (delete)="onDelete($event)"></app-user-item>
    Selected user: {{selectedUser?.first_name}} {{selectedUser?.last_name}}
  </div>`,
})
export class UserListComponent{
  users = users;
  selectedUser: User = users[0];
  onSelected(user: User){
    this.selectedUser = users.find(u => u.id == user.id);
  }
  onDelete(user: User){
    this.users = this.users.filter(u => u.id != user.id);
    if(this.selectedUser.id == user.id){
      this.selectedUser = this.users[0];
    }
  }
}