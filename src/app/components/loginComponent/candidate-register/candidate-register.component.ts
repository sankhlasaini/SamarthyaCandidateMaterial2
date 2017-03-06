import { Component, OnInit, Inject, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from 'app/services/validation.service';
import { JsonDataService } from 'app/services/json-data.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { EmailService } from 'app/services/email.service';
declare var $: any;

@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css'],
  providers: [JsonDataService]
})
export class CandidateRegisterComponent implements OnInit {

  public jsonObj = {};
  public languages = [];
  public profession = [];
  public locations = [];
  public placementCenter = [];
  public userForm: FormGroup;
  public emailId='';
  public formData = {};
  public candidates = [];
  public timer;


  ngOnInit() {
    // getting languages and form data from json file 
    this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData));
    // this.emailId = this.route.snapshot.params['id'];
    // this.route.snapshot.data['type'];
    this.emailService.getRegister()
      .subscribe(resEmployeeData => {
        this.emailId = resEmployeeData.usermail2;
        console.log(this.emailId);
      });
  }

  constructor( @Inject(FormBuilder) fb: FormBuilder, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router, private http: Http, private emailService: EmailService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, ) {
    // register candidate form
    this.userForm = fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      gender: ['male', Validators.required],
      email: [{ value: '', disabled: true }],
      regId: ['', Validators.required],
      // dob:'',
      aadhar: ['', [Validators.required, ValidationService.aadharValidator]],
      mob: ['', [Validators.required, ValidationService.mobValidator]],
      password: ['', [Validators.required, ValidationService.passwordValidator]],
      conPassword: ['', [Validators.required, ValidationService.passwordValidator]],
      profession: ['', [Validators.required]],
      pincode: ['', [Validators.required, ValidationService.pincodeValidator]],
      placementCenter: ['', [Validators.required]]
    });
  }

  //Getting data from json File for languages and dropdown
  getdata(jsonData) {
    this.jsonObj = jsonData;
    this.languages = this.jsonObj['languages'];
    this.profession = this.jsonObj['profession'];
    this.locations = this.jsonObj['locations'];
    this.placementCenter = this.jsonObj['placementCenter'];
  }

  // password confirm Validators
  password: string = "";
  passwordMatchWarning: string = "";
  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass) {
    if (this.password != conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById("resetBtn")).disabled = true;
    }
    else {
      this.passwordMatchWarning = '';
      // (<HTMLInputElement> document.getElementById("resetBtn")).disabled = false;
    }
  }

  //snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  verifyUserRegistration() {
    if (this.candidates.length == 0) {
      this.userForm.value.email = this.emailId;
      this.formData = this.userForm.value;
      console.log(this.formData);
      this.JsonDataService.create(this.formData);
    }
    else {
      this.openSnackBar('User already Exist', 'Please Login');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500)
    }
  }

  // on form submit
  onRegister() {
    console.log(this.emailId);
    this.JsonDataService.getEmail(this.emailId).subscribe(resJsonData => [
      this.candidates = resJsonData, this.verifyUserRegistration()]);
  }
}
