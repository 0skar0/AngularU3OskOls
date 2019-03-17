import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

//Skickar outputs till sin förälder.
export class EditUsersComponent  {
  userInput:string = '';
  @Output() addUser = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<string>();
  constructor() { }

  //skickar ett event (usern) till sin förälder
  addOneUser() {
    this.addUser.emit(this.userInput);
  }
  //skickar ett event (tar bort en user) till sin förälder
  removeOneUser() {
    this.removeUser.emit();
  }

}
