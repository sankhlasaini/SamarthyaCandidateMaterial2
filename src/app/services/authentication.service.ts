import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Service for Authentication
// having two methods login and logout
// If login then set the user in the localstorage.
// if logout remove the user from localstorage.

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private router: Router) { }

  login(email, password) {

    return this.http.post('http://localhost:3000/api/authenticate', { email: email, password: password })
      .map((response: Response) => {
        const user = response.json();
        if (user === 'userError') {
          console.log('id wrong');
        } else if (user === 'passwordError') {
          console.log('password wrong');
        }
        // console.log(user);
        // data from response store in variable
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage
          localStorage.setItem('currentUser', JSON.stringify(user));
          // here we set that data in localstorage
        }
      });
  }

  logout() {
    // remove user from local storage
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
