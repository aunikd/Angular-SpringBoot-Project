import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message = ''
  name=''

  todos = [{
      id : '1',
      desc : 'Learn to Drive'
  },
      {
      id : '2',
      desc : 'Learn to Code'
    }
  ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

        //console.log(this.message)
        this.name = this.route.snapshot.params['name'] ;
        console.log(this.name)
  }

}
