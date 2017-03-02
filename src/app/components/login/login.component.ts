import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router'


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
  user:any = {};
  returnUrl :String;
  
  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router,private route:ActivatedRoute,
    private authenticationService:AuthenticationService) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() { 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  public result: any;

  public forgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }
  public verifyEmail() {
    this.router.navigate(['/verifyEmail']);
  }

  login(){
    this.authenticationService.login(this.userForm.value.email,this.userForm.value.password)
        .subscribe(
          data =>{this.router.navigate([this.returnUrl]);},
          error => {console.log("Error in login method")}
        );
  }
}