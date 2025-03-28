import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';

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

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:9090/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPathVariable(name: string){

    // let basicAuthHeaderString =this.createBasicAuthHttpHeader();

    // let header = new HttpHeaders(
    //   {Authorization:basicAuthHeaderString}
    // )
    return this.http.get<HelloWorldBean>(`http://localhost:9090/hello-world/path-variable/${name}`,
      // {headers:header}
    );
  }

  // createBasicAuthHttpHeader(){
  //   let username = 'rocky'
  //   let password = 'password1'
  //   let basicAuthHeaderString = 'Basic'+ window.btoa(username+':'+password);
  //   return basicAuthHeaderString;
  // }

}
