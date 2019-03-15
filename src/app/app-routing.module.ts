import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RouteGuardService as Routegard
} from './route-guard.service';


// Paths till olika länkar. Samt Routegard till min dashboard
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {title: 'Main'},
    canActivate: [Routegard]
  },
  { path: 'single-user/:id', component: SingleUserComponent },
  { path: 'createuser', component: CreateUserComponent },
  { path: '**', component:  PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
