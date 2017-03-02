import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
import { EmailService } from 'app/services/email.service';
import { JsonDataService } from 'app/services/json-data.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router'

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

  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() { }

  // on login submit
  onSubmit() {
    console.log(this.userForm.value);
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



}