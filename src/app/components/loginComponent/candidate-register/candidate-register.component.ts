import { Component, OnInit, Inject, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JsonDataService } from 'app/services/json-data.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { EmailService } from 'app/services/email.service';

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
  public emailId = '';
  public formData = {};
  public candidates;
  public timer;
  public pincode;
  public pincodeLocation;
  public areaList = [];
  public password = '';
  public passwordMatchWarning = '';

  ngOnInit() {
    // getting languages and form data from json file
    this.JsonDataService.getPlacementCenter().subscribe(resJsonData => this.getPlacementCenter(resJsonData));

    this.JsonDataService.getLocations().subscribe(resJsonData => this.getLocations(resJsonData));

    this.JsonDataService.getProfession().subscribe(resJsonData => this.getProfession(resJsonData));

    this.emailService.getRegister()
      .subscribe(resEmployeeData => {
        this.emailId = resEmployeeData.usermail2;
        console.log(this.emailId);
      });
  }

  // Getting placement Centers
  getPlacementCenter(jsonData) {
    this.placementCenter = jsonData;
  }

  // Getting data locations
  getLocations(jsonData) {
    this.locations = jsonData;
  }

  // Getting Professions
  getProfession(jsonData) {
    this.profession = jsonData;
  }


  constructor( @Inject(FormBuilder) fb: FormBuilder, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router, private http: Http, private emailService: EmailService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, ) {

    // register candidate form
    this.userForm = fb.group({
      fname: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,}')]],
      lname: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,}')]],
      gender: ['male', Validators.required],
      email: [{ value: '', disabled: true }],
      regId: ['', Validators.required],
      // dob:'',
      aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      mob: ['', [Validators.required, , Validators.pattern('[0-9]{10}')]],

      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
      conPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],

      profession: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      location: ['', Validators.required],
      placementCenter: ['', [Validators.required]]
    });
  }

  // snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // password confirm Validators
  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass) {
    if (this.password !== conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;
    } else {
      this.passwordMatchWarning = '';
      // (<HTMLInputElement> document.getElementById(''resetBtn'')).disabled = false;
    }
  }

  // check Pincode
  getPincode() {
    this.JsonDataService.getPincode(this.pincode).subscribe(
      resPincodeData => [this.pincodeLocation = resPincodeData, this.getPincodeLocation()]);
  }

  // get pincode locations after checking pincode
  getPincodeLocation() {
    this.userForm.value.location = '';
    this.areaList = [];
    this.pincodeLocation.forEach(element => {
      this.areaList.push(element['officename'] + ', ' + element['Districtname'] + ', ' + element['statename']);
    });
    if (this.areaList.length === 0) {
      this.openSnackBar('No Location Found', 'Please Try again');
      // this.areaList.push('Area Not Found');
    } else {
      this.openSnackBar(this.areaList.length + ' Locations Found', 'Please Select');
    }
  }

  // on userverify button
  verifyUserRegistration() {
    if (this.candidates== 'nouser,') {
      this.userForm.value.email = this.emailId;
      this.formData = this.userForm.value;
      console.log(this.formData);
      this.JsonDataService.create(this.formData);
      this.openSnackBar('Successfully Register', 'Please Login');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500);
    } else {
      this.openSnackBar('User already Exist', 'Please Login');
      this.timer = setTimeout(() => this.router.navigate(['/login']), 500);
    }
  }

  // on form submit
  onRegister() {
    console.log(this.userForm.value);
    // console.log(this.emailId);
    if (this.emailId === '') {
      this.openSnackBar('No Email Id Present', 'Please Verify Email');
    } else {
      this.JsonDataService.getEmail(this.emailId).subscribe(resJsonData => [
        this.candidates = resJsonData, this.verifyUserRegistration()],
        error => {
          this.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
        });
    }
  }
}
