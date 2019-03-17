import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AdminLogin } from '../models/admin-login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// utför kontroller vid in- och utloggninsförsök.
export class LoginComponent {

  user: AdminLogin = new AdminLogin('', '');
  userName: string;
  modalOrNot: boolean;
  modalInputString: string;

  // kollar värdet på userName, som jag använder i min ngIf
  constructor(private authService: AuthServiceService, private router: Router) {
    this.userName = authService.checkIfLoggedIn();
  }

  // kallar på logout-metoden i authService.
  logout(): void {
    this.authService.logout();
  }

  // En funktion för att kontrollera om användaren och lösernordet som skickats in stämmer överens med användare och lösenord som finns i authService. Om inte renderas modalen. Om inloggningen misslyckas skickas en inputsträng med till modalen.
  onSubmit(): void {
    for (let i = 0; i < this.authService.admins.length; i++) {
      if (this.user.email === this.authService.admins[i].email && this.user.password === this.authService.admins[i].password) {
        this.authService.login(this.user.email);
        this.router.navigate(['dashboard']);
        this.modalOrNot = false;
      } else {
        this.modalOrNot = true;
        this.authService.displayModalOrNot = true;
        this.modalInputString = 'Please type in correct login credentials!'
      }
    }
  }

}
