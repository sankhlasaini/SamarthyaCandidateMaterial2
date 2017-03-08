import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
import { LoginComponent } from 'app/components/loginComponent/login/login.component';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable()
export class JsonDataService {

  public pincode;

  // url to store data from json file for Registration details
  private urlRegister = 'http://localhost:3001/candidates';

  // url to get pincode info
  private urlPincode = 'http://localhost:3002/pincodeDetails';

  // url to retrive data from json file for languages
  private url = 'jsonData/jsonData.json';
  public timer;

  constructor(private http: Http, private snackBar: MdSnackBar, private router: Router) { }

  // snackbar notifications
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // Store Registration details in json file
  create(formData) {
    console.log('service called');
    this.http.post(this.urlRegister, formData).subscribe(data => {
      this.openSnackBar(formData.email, 'Register Successfully');
      this.router.navigate(['/']);
    }, error => {
      console.log(error.json());
    });
  }

  // get json data for langauges and dropdown
  getJsonData() {
    return this.http.get(this.url).map((response: Response) => response.json());
  };

  getPincode(pincode) {
    return this.http.get(this.urlPincode + '?pincode=' + pincode)
      .map((response: Response) => response.json());
  };

  // get data for by verify email in database
  getEmail(email) {
    return this.http.get(this.urlRegister + '?email=' + email).map((response: Response) => response.json());
  };
}

