import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//Sparar en egenskap som en array med alla users som skickas in.
export class DashboardComponent {

  loggedUser: string;

  // hämtar värdet av loggedUser i authService
  constructor(private authService: AuthServiceService) {
    this.loggedUser = authService.checkIfLoggedIn();
  }



}
