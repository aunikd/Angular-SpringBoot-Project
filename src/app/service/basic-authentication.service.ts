import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  

  constructor(private http: HttpClient) { }


  authenticate(username: string, password: string) {
    // console.log('BEFORE '+this.isUserLoggedIn());
    if (username === 'rocky' && password === 'pass123') {
      sessionStorage.setItem('authenticateUser', username);
      // console.log('AFTER '+this.isUserLoggedIn());
      console.log("LOGED IN TRUE")
      return true
    }
    else {
      return false
    }

  }
  
    executeBasicAuthService(username: string, password: string){
  
      let basicAuthHeaderString = 'Basic'+ window.btoa(username+':'+password);

      let header = new HttpHeaders(
        {Authorization:basicAuthHeaderString}
      )
      return this.http.get<AuthenticationBean>(`http://localhost:9090/basicauth`,
        {headers:header}).pipe(
          map(
            data =>{
              sessionStorage.setItem('authenticateUser',username)
              return data;
            }
          )
        );
    }
  
    createBasicAuthHttpHeader(){
      let username = 'rocky'
      let password = 'password1'
      let basicAuthHeaderString = 'Basic'+ window.btoa(username+':'+password);
      return basicAuthHeaderString;
    }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user == null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }

}
  export class AuthenticationBean{
    constructor(public message:string){

    }
  }


