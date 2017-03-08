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

  // url to retrive data from json file for candidate navLinks
  private urlNavlinks = 'http://localhost:3003/navList';

  // url to get langauges
  private urlLanguages = 'http://localhost:3003/languages';

  // url to get profession
  private urlProfession = 'http://localhost:3003/profession';

  // url to get locations
  private urlLocations = 'http://localhost:3003/locations';

  // url to get placementCenter
  private urlPlacementCenter = 'http://localhost:3003/placementCenter';

  public timer;

  constructor(private http: Http, private snackBar: MdSnackBar, private router: Router) { }

  // snackbar notifications
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // Store Registration details in databse
  create(formData) {
    // console.log('service called');
    // console.log("josn data service : "+formData['fname']); 
    this.http.post('http://localhost:4000/adduser', formData).subscribe(data => {
      this.openSnackBar(formData.email, 'Register Successfully');
      this.router.navigate(['/']);
    }, error => {
      console.log(error.json());
    });
  }

  // get data for by verify email in database
  getEmail(email) {
    return this.http.get('http://localhost:4000/checkEmail?email=' + email).map((response: Response) =>[response['_body'], console.log(response['_body'])]
    
        );
  };

  // get json data for langauges and dropdown
  getNavLinks() {
    return this.http.get(this.urlNavlinks).map((response: Response) => response.json());
  };
  // get json data for langauges and dropdown
  getLanguages() {
    return this.http.get(this.urlLanguages).map((response: Response) => response.json());
  }; // get json data for langauges and dropdown
  getLocations() {
    return this.http.get(this.urlLocations).map((response: Response) => response.json());
  }; // get json data for langauges and dropdown
  getProfession() {
    return this.http.get(this.urlProfession).map((response: Response) => response.json());
  }; // get json data for langauges and dropdown
  getPlacementCenter() {
    return this.http.get(this.urlPlacementCenter).map((response: Response) => response.json());
  }; // get json data for langauges and dropdown

  getPincode(pincode) {
    return this.http.get(this.urlPincode + '?pincode=' + pincode)
      .map((response: Response) => response.json());
  };

}

