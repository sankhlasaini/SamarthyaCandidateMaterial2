import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './Guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { routingComponents } from 'app/app-routing.module';
import { LogoutComponent } from 'app/components/logout/logout.component';
import { AppbarComponent } from 'app/components/appbar/appbar.component';
import { LoginComponent } from 'app/components/loginComponent/login/login.component';
import { LayoutComponent } from 'app/components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonDataService } from 'app/services/json-data.service';
import { EmailService } from 'app/services/email.service';
import { PasswordResetComponent } from 'app/components/loginComponent/password-reset/password-reset.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from 'app/components/loginComponent/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'app/components/loginComponent/verify-email/verify-email.component';
import { LoginHeaderComponent } from 'app/components/loginComponent/login-header/login-header.component';
import { LoginFooterComponent } from 'app/components/loginComponent/login-footer/login-footer.component';
import { Md2Module } from 'md2';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    EmailService,
    JsonDataService,
    AuthGuard,
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    routingComponents,
    LogoutComponent,
    AppbarComponent,
    LoginComponent,
    LayoutComponent,
    PasswordResetComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    LoginHeaderComponent,
    LoginFooterComponent,
  ],
})
export class AppModule { }
