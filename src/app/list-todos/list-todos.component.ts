import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Todo {
  constructor(    
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message = ''
  name=''

  todos = [
    new Todo(1,'Learn to Drive', false,new Date()),
    new Todo(2,'Learn to Code',false,new Date())

  //   {
  //     id : '1',
  //     desc : 'Learn to Drive'
  // },
  //     {
  //     id : '2',
  //     desc : 'Learn to Code'
  //   }
  ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

        //console.log(this.message)
        this.name = this.route.snapshot.params['name'] ;
        console.log(this.name)
  }

}
