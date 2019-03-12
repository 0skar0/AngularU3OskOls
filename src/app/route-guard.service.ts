import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service'

@Injectable({
  providedIn: 'root'
})

// Routeguard som förhindrar tillträde till vissa sidor om ett krav inte uppfylls
export class RouteGuardService implements CanActivate {

  constructor(public router: Router, private authService: AuthServiceService) {

  }
  // hämtar värdet av loggedUser i authService. om det inte finns något värde navigeras man till login
  canActivate(): boolean {
    let loggedUser = this.authService.checkIfLoggedIn();
    if (!loggedUser) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
