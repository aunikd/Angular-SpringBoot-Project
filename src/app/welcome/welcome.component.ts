import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = ''
  name='rocky'
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {

    //console.log(this.message)
    this.name = this.route.snapshot.params['name'] ;
    console.log(this.name)
   
  }

  showTodo() {
    this.router.navigate(['todos',this.name])

  }

}
