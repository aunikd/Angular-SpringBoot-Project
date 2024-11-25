import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  password=''
  constructor(private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){

    // if(this.username === 'rocky' && this.password === 'pass123'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){

      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
    }

    console.log(this.username);
  }
}
