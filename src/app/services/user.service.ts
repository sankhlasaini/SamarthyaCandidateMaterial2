
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  private jwt(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser && currentUser.token){
      let headers =  new Headers({'Authorization' : 'Bearer' + currentUser.token});
      return new RequestOptions({headers:headers});
    }
  }

  getAll(){
    return this.http.get('http://localhost:4000/api/showuser',this.jwt())
               .map((response:Response)=>response.json());
  }

  // create(user:User){
  //   return this.http.post('http://localhost:3005/users/register',user,this.jwt());
  // }

}

