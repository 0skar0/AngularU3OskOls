import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';

@Injectable({
  providedIn: 'root'
})

// Sköter logik för ut- och inloggning och hanterar användare
export class AuthServiceService {

  public displayModalOrNot: boolean;
  public loggedUser: string;
  public admins: AdminFull[] = [{
    firstName: 'Tord',
    lastName: 'Yvel',
    email: 'tord.yvel@varanteatern.se',
    password: 'varantvftw'
  }, {
    firstName: 'Romeo',
    lastName: 'Olsson',
    email: 'romeo.olsson@varanteatern.se',
    password: 'varantvftw1'
  }];

  constructor() { }

  // tilldelar loggedUser ett värde från login-component i localStorage
  public login(name: string): void {
    localStorage.setItem('user', name);
    this.loggedUser = name;
  }

  // rensar localStorage vit utloggning och sätter loggedUser till undefined
  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }

  // kontrollerar om man är inloggad eller ej genom att hämta värdet av user i localStorage.
  public checkIfLoggedIn(): string {
    return localStorage.getItem('user')
  }
}
