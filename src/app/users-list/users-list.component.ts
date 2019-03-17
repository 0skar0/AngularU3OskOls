import { Component, Input } from '@angular/core';

//Renderar en Ul-lista samt skickar med en boolean till user-list-item.
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent  {

  textColor: boolean;
  @Input() users: string[];

  constructor() { }

  //togglar mellan sant och falskt.
  toggleFontColor(): void {
    this.textColor = !this.textColor;
  }

}
