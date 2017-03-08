import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JsonDataService } from 'app/services/json-data.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { EmailService } from 'app/services/email.service';
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
  public password = '';
  public passwordMatchWarning = '';



  constructor( @Inject(FormBuilder) fb: FormBuilder, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router, private emailService: EmailService) {
    // register candidate form
    this.userForm = fb.group({
      email: [{ value: '', disabled: true }],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
      conPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
    });
  }

  ngOnInit() {
    this.emailService.getRegister()
      .subscribe(resEmployeeData => {
        this.emailId = resEmployeeData.usermail2;
        console.log(this.emailId);
      });
  }

  getdata(jsonData) {
    this.jsonObj = jsonData;
    this.languages = this.jsonObj['languages'];
  }

  // password confirm Validators
  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass, pass) {
    if (pass !== conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;
    }    else {
      this.passwordMatchWarning = '';
      // (<HTMLInputElement> document.getElementById("resetBtn")).disabled = false;
    }
  }

  // on form submit
  onSubmit() {
    this.userForm.value.email = this.emailId;
    // console.log(this.userForm.value);
  }

  // on back button
  onBack() {
    this.router.navigate(['/login']);
  }
}
