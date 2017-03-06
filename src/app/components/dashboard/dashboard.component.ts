import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private appComponent: AppComponent) { }
  ngOnInit() {
  }
}
