import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators' 
import { API_URL } from '../app.constants';

export const TOKEN='token'
export const AUTHENTICATED_USER='authenticateUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  

  constructor(private http: HttpClient) { }

    
  executeJWTAuthService(username: string, password: string){
    // let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password);

    // let header = new HttpHeaders(
    //   {Authorization:basicAuthHeaderString}
    // )
    return this.http.post<any>(
      `${API_URL}/authenticate`,{username,password}
      ).pipe(
        map(
          data =>{

            sessionStorage.setItem(AUTHENTICATED_USER,username)
            sessionStorage.setItem(TOKEN,`Bearer ${data.token}`)

            return data;
          }
        )
      );
  }


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
      let basicAuthHeaderString = 'Basic '+ window.btoa(username+':'+password);

      let header = new HttpHeaders(
        {Authorization:basicAuthHeaderString}
      )
      return this.http.get<AuthenticationBean>(
        `${API_URL}/basicauth`,
        {headers:header}).pipe(
          map(
            data =>{

              sessionStorage.setItem(AUTHENTICATED_USER,username)
              sessionStorage.setItem(TOKEN,basicAuthHeaderString)

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

    getAuthenticatedUser() {

      return sessionStorage.getItem(AUTHENTICATED_USER);
    }

    getAuthenticatedToken() {
      if(this.getAuthenticatedUser()){
        console.log(sessionStorage.getItem(TOKEN))
        return sessionStorage.getItem(TOKEN);

      }
      else
        return null;
    }

    isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user == null)
  }

    logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);

  }

}
  export class AuthenticationBean{
    constructor(public message:string){

    }
  }


