import { AuthenticationService } from 'app/services/authentication.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [JsonDataService]
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;
  public modalVerify: FormGroup;
  public modalReset: FormGroup;
  public infoobj;
  private postobject;
  public candidates = [];
  public result: any;
  public showProgress = false;


  public user: any = {};
  public returnUrl: String;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router, private route: ActivatedRoute,
    private authenticationService: AuthenticationService, private appComponent: AppComponent) {

    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
    });
  }

  // on login submit
  onSubmit() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.redirect();
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  // snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  public forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  public verifyEmail() {
    this.router.navigate(['/verifyEmail']);
  }

  // on login click
  login() {
    this.showProgress = true;
    this.authenticationService.login(this.userForm.value.email, this.userForm.value.password)
      .subscribe(
      data => {
        [
          this.router.navigate([this.returnUrl]),
          this.openSnackBar('WELCOME : ', this.userForm.value.email),
          // console.log(this.returnUrl)
        ];
      },
      error => {
        this.openSnackBar('Username OR Password Wrong', 'Try Again');
        // this.showProgress = false
      }
      );
  }

  redirect() {
    console.log('redirect');
    this.router.navigate(['/dashboard']);
  }
}
