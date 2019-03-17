import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

// prenumerar på Observables i usersService för att skriva ut users i min userlist.
export class UserListItemComponent  {

  @Input() textColor: boolean;
  jsonUsers: string[] = [];
  failedToLoadJsonUsers: string;

  //Tar emot svaren på min prenumeration från usersService.
  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(
      (response) => this.pushUsers(response),
      (error) => this.failFunction(error)
    );
  }

  // Tar emot error.status om innehållet från jsonplaceholder inte kan hämtas av någon anledning.
  failFunction(error: any): void {
    this.failedToLoadJsonUsers = error.status;
  }

  //Loopar genom min Observable från jsonplaceholder och pushar in användarnamnen i min jsonUsers-egenskap.
  pushUsers(resp: any): void {
    for(let i = 0; i < resp.length; i++) {
      this.jsonUsers.push(resp[i]);
    }
  }
}
