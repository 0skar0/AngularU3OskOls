import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { AdminFull } from '../models/admin-full.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUser: AdminFull = new AdminFull('','','','');

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.admins.push(this.createUser);
    this.router.navigate(['login'])
  }

}
