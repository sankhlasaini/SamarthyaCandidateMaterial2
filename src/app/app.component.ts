import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  ngOnInit(){
    if(localStorage.getItem('currentUser'))
    {
      console.log(localStorage.getItem('currentUser'));
      
    }
  }
  loginStatus = false;
}
