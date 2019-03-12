import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

// Visar vilken user användaren klickat på från user-list-item.
export class SingleUserComponent  {

  user: string;

  // Ger oss tillträde till params parametrar via subscribe.
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.user = params.id;
    })
  }

}
