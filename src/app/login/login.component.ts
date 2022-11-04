import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){

    if(this.username === 'rocky' && this.password === 'pass123'){
      this.invalidLogin = false
    } else{
      this.invalidLogin = true
    }

    console.log(this.username);
  }
}
