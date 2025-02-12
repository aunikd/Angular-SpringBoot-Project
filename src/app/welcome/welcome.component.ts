import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = ''
  beanMessage:string=''
  errorMessage:string=''
  name='rocky'
  constructor(private route:ActivatedRoute, private router: Router, private service:WelcomeDataService) { }

  ngOnInit() {

    //console.log(this.message)
    this.name = this.route.snapshot.params['name'] ;
    console.log(this.name)
   
  }

  showTodo() {
    this.router.navigate(['todos',this.name])

  }

  welcomeMessage() {
    console.log(this.service.executeHelloWorldService());
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of welcome')
    //console.log("get welcome message")
  }

  handleSuccessfulResponse(response:any){
    this.beanMessage=response;
    console.log(this.beanMessage);
  }

  handleErrorResponse(error:any){
    this.errorMessage=error.error.message;
    console.log(this.errorMessage);
  }

}
