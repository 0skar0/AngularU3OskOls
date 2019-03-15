import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

// tar emot inputs från users-list
export class UserListItemComponent  {

  @Input() users: string[];
  @Input() textColor: boolean;
  jsonUsers: string[] = [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(
      (response) => this.pushUsers(response),
      (error) => console.log('error', error)

    );
  }

  //Loopar genom min Observable (?) från jsonplaceholder och pushar in användarnamnen i min jsonUsers-egenskap.
  pushUsers(resp: any): void {
    for(let i = 0; i < resp.length; i++) {
      this.jsonUsers.push(resp[i]);

    }


  }
}
