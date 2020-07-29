import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from '../user.model';

@Component({
  selector: `app-user-item`,
  template: `<div>
    {{user.id}}. {{ user.first_name}}  {{user.last_name}}
    <button (click)="select.emit(user)">Select</button>
    <button (click)="delete.emit(user)">Delete</button>
  </div>`,
})
export class UserItemComponent{
  @Input() user: User;
  @Output() select = new EventEmitter<User>();
  @Output() delete = new EventEmitter<User>();
}