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
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
  providers: [JsonDataService]
})
export class VerifyEmailComponent implements OnInit {

  public userForm: FormGroup;
  public infoobj;
  private postobject;
  public candidates = [];
  public timer;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
    });
  }

  ngOnInit() { }

  //snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // verify user if already exist or not for registration
  verifyUserRegistration() {
    if (this.candidates.length == 0) {
      //console.log(this.candidates);
      this.infoobj = {
        'to': this.userForm.value.email,
        'subject': "Email verification",
        'redirect': "http://localhost:4200/candidateRegister",
        'mailBody': "Please Click on this link to verify your Email"
      }
      this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
        error => [this.openSnackBar('VERIFICATION MAIL SENT', 'Please Check your MAIL'),
        this.timer = setTimeout(() => this.router.navigate(['/login']), 500)], () => console.log("finished"));
    }
    else {
      this.openSnackBar('User already Exist', 'Please Login');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500)
    }
  }

  // on create account submit
  onVerifyLink() {
    console.log(this.userForm.value.email);
    this.JsonDataService.getEmail(this.userForm.value.email).subscribe(resJsonData => [
      this.candidates = resJsonData, this.verifyUserRegistration()]);
  }

  onBack() {
    this.router.navigate(['/login']);

  }
}