import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Add email password change
  loginErrorMsg = 'Invalid Credentials. Username or Password maybe incorrect'
  invalidLogin=false
  username='rocky'
  password='pass123'
  constructor(private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin(){

    // if(this.username === 'rocky' && this.password === 'pass123'){
    this.basicAuthenticationService.executeBasicAuthService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.username])
        this.invalidLogin=false;

      },
      error=>{
        this.invalidLogin=true;
      }
    )

  }

  handleAuthLogin(){

      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){

      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
    }

    console.log(this.username);
  }
}
