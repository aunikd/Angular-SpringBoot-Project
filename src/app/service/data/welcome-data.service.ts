import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string){ }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldService(){
    console.log("Execute weolcome service")
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloworld-bean');
  }

}
