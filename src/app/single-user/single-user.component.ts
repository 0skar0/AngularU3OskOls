import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

// Visar vilken user användaren klickat på från user-list-item.
export class SingleUserComponent  {

  userId: string;
  user:Object;
  failedToLoadUsers: string = '';


  // Ger oss tillträde till params parametrar via subscribe.
  constructor(private route: ActivatedRoute, private userService: UsersService) {
    //tilldelar userId  ett id
    this.route.params.subscribe(params => {
      this.userId = params.id;
    })
    //hämtar responset från jsonplaceholder. även ett error om hämtningen misslyckas.
    this.userService.getUser(this.userId).subscribe(
      (response) => this.user = response,
      (error) => this.failedToLoadUsers = error.message
    )
  }

}
