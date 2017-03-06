import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from 'app/services/validation.service';
import { JsonDataService } from 'app/services/json-data.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import {EmailService } from 'app/services/email.service';
// declare var $: any;

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})

export class PasswordResetComponent implements OnInit {

  public jsonObj = {};
  public languages = [];
  public userForm: FormGroup;
  public emailId = '';

  constructor( @Inject(FormBuilder) fb: FormBuilder, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router, private emailService:EmailService) {
    // register candidate form
    this.userForm = fb.group({
      email: [{value:'', disabled: true}],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      conPassword: ['', [Validators.required, ValidationService.passwordValidator]],
    });
  }

  ngOnInit() {
    this.emailService.getRegister()
      .subscribe(resEmployeeData => {
      this.emailId = resEmployeeData.usermail2;
        console.log(this.emailId);
      }); }

  getdata(jsonData) {
    this.jsonObj = jsonData;
    this.languages = this.jsonObj['languages'];
  }

  // password confirm Validators
  password: string = "";
  passwordMatchWarning: string = "";

  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass, pass) {
    if (pass != conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById("resetBtn")).disabled = true;
    }
    else {
      this.passwordMatchWarning = '';
      // (<HTMLInputElement> document.getElementById("resetBtn")).disabled = false;
    }
  }

  // on form submit
  onSubmit() {
    this.userForm.value.email = this.emailId;
    // console.log(this.userForm.value);
  }
  onBack() {
    this.router.navigate(['/login']);

  }
}