// import { EmailService } from 'app/services/email.service';
import { LoginComponent } from 'app/components/loginComponent/login/login.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmailService {
  private _url = 'http://localhost:3004';

  public ref: LoginComponent;

  // public linksend: any = {};
  // public data2 :LoginComponent  ;

  constructor(private _http: Http) { }

  postdata(mailObj: LoginComponent) {
    // var data1=JSON.stringify({to :"sheenamnarula1993@yahoo.com", subject:"abc", text:"hello" });
    const mailObjString = JSON.stringify(mailObj);
    const params = 'json=' + mailObjString;
    const res = '';
    const headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return this._http.post(this._url, params, {
      headers: headers
    }).map(res => res.json());
  }

  getRegister() {
    // console.log(this.linksend.link+"link aa gya");
    return <any>this._http.get('http://localhost:3004/verifiedmail')
      .map((response: Response) => {
        return response.json();
      });
  }
}
