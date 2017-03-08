import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'app/components/about-us/about-us.component';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { CandidateSearchComponent } from 'app/components/candidate-search/candidate-search.component';
import { CandidateRegisterComponent } from 'app/components/loginComponent/candidate-register/candidate-register.component';
import { EmployersComponent } from 'app/components/employers/employers.component';
import { EventPostComponent } from 'app/components/event-post/event-post.component';
import { JobPostComponent } from 'app/components/job-post/job-post.component';
import { LogoutComponent } from 'app/components/logout/logout.component';
import { LoginComponent } from 'app/components/loginComponent/login/login.component';
import { PasswordResetComponent } from 'app/components/loginComponent/password-reset/password-reset.component';
import { ForgotPasswordComponent } from 'app/components/loginComponent/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'app/components/loginComponent/verify-email/verify-email.component';
import { AuthGuard } from './Guard/auth.guard';
import { LayoutComponent } from 'app/components/layout/layout.component';
// import { LoginGuard } from './Guard/login.guard';

// routes
const routes: Routes = [
  {
    path: 'home', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'candidateSearch', component: CandidateSearchComponent },
      { path: 'eventPost', component: EventPostComponent },
      { path: 'jobPost', component: JobPostComponent },
    ]
  },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'candidateRegister', component: CandidateRegisterComponent },
  { path: 'verifyEmail', component: VerifyEmailComponent },
  { path: 'passwordReset', component: PasswordResetComponent },
  { path: '**', redirectTo: '/home' }
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
