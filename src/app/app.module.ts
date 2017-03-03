import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './Guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { ValidationService } from 'app/services/validation.service';
import { JsonDataService } from 'app/services/json-data.service';
import { EmailService } from 'app/services/email.service';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [
    ValidationService,
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
    ControlMessagesComponent,
    PasswordResetComponent,
    LoginLayoutComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
})
export class AppModule { }
