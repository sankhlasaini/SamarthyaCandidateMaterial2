import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public navList = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Search', path: '/candidateSearch', icon: 'search' },
    { name: 'Events', path: '/eventPost', icon: 'assignment' },
    { name: 'Job Post', path: '/jobPost', icon: 'mood' },
    { name: 'About Us', path: '/aboutUs', icon: 'domain' }
  ];

  constructor(private authenticationService: AuthenticationService, private appComponent: AppComponent,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  //snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  logout() {
    this.authenticationService.logout();
    this.openSnackBar('Successfully','Logged Out');
  }
}