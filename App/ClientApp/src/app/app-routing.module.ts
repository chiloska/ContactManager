import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexHomeComponent } from './home/components/index-home/index-home.component';
import { LoginComponent } from './home/components/login/login.component';
import { EmailComponent } from './home/components/email/email.component';
import { SignupComponent } from './home/components/signup/signup.component';

import { IndexDashComponent } from './dashboard/components/index-dash/index-dash.component';

import { AcccesGuardService } from './services/accces-guard.service';

const routes: Routes = [
  { path: '', component: IndexHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'email', component: EmailComponent },
  { path: 'dashboard', component: IndexDashComponent, canActivate: [AcccesGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
