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
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of welcome')
    //console.log("get welcome message")
  }

  welcomeMessagewithParameter(){

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      
      response => this.handleSuccessfulResponse(response),
      
      error => this.handleErrorResponse(error)
    );

  }

  handleSuccessfulResponse(response:any){
    this.beanMessage=response.message;
    console.log("BEAN MESSAGE")
    console.log(this.beanMessage);
  }

  handleErrorResponse(error:any){
    this.errorMessage=error.error.message;
    console.log(this.errorMessage);
  }

}
