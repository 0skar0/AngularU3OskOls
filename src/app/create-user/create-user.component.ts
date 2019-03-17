import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AdminFull } from '../models/admin-full.model';
import { Router } from '@angular/router';

// En komponent för att skapa och lägga till en ny användare.
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent  {

  createUser: AdminFull = new AdminFull('','','','');

  constructor(private authService: AuthServiceService, private router: Router) { }

  // Pushar in den registrerade användaren i authService.admins och navigerar användaren till login-sidan när man klickar på 'create user'
  onSubmit() {
    this.authService.admins.push(this.createUser);
    this.router.navigate(['login'])
  }

}
