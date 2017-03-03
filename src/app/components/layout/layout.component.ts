import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public navList = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Register', path: '/candidateRegister', icon: 'person_add' },
    { name: 'Search', path: '/candidateSearch', icon: 'search' },
    { name: 'Events', path: '/eventPost', icon: 'assignment' },
    { name: 'Job Post', path: '/jobPost', icon: 'mood' },
    { name: 'About Us', path: '/aboutUs', icon: 'domain' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
