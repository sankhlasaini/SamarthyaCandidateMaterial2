import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CandidateSearchComponent } from './components/candidate-search/candidate-search.component';
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component';
import { EmployersComponent } from './components/employers/employers.component';
import { EventPostComponent } from './components/event-post/event-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ForgotPasswordComponent } from 'app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'app/components/verify-email/verify-email.component';

import { AuthGuard } from './Guard/auth.guard';

// routes
const routes: Routes = [
  { path: '', component:DashboardComponent, canActivate:[AuthGuard] },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'candidateRegister/:id', component: CandidateRegisterComponent, data: { type: 'edit' } },
  { path: 'candidateSearch', component: CandidateSearchComponent },
  { path: 'eventPost', component: EventPostComponent },
  { path: 'jobPost', component: JobPostComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'verifyEmail', component: VerifyEmailComponent },
  { path: 'passwordReset/:id', component: PasswordResetComponent, data: { type: 'edit' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { };

export const routingComponents = [
  AboutUsComponent,
  DashboardComponent,
  CandidateRegisterComponent,
  CandidateSearchComponent,
  EventPostComponent,
  JobPostComponent,
  LogoutComponent,
  PasswordResetComponent,
  ForgotPasswordComponent,
  VerifyEmailComponent
];
