import { Component, Input, DoCheck } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

// En modal-komponent som tar emot en egenskap med en textsträng. Denna visas när användaren skriver in fel inloggningsuppgifter.
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements DoCheck {

  @Input() inputString: string;

  constructor(private authService: AuthServiceService) { }
  //DoCheck kollar värdet på displayModalOrNot i authService. Om det är sant visas modalen.
  public ngDoCheck(): void {
    let modal = document.getElementById('myModal');
    if (this.authService.displayModalOrNot === true) {
      modal.style.display = 'flex';
    }
  }

  //när man klickar på krysset stängs modalen och displayModalOrNot blir falsk.
  public closeFunc(): void {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
    this.authService.displayModalOrNot = false;
  }

}
