import { Component, OnInit } from '@angular/core';
import { JsonDataService } from 'app/services/json-data.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css'],
  providers: [JsonDataService]
})
export class LoginLayoutComponent implements OnInit {

  public languages = [];

  constructor(private JsonDataService: JsonDataService) { }

  ngOnInit() {
    // getting languages form json file
    this.JsonDataService.getJsonData().subscribe(resJsonData => this.getdata(resJsonData['languages']));
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }
}