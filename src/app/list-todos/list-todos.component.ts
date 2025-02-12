import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

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

  todos: Todo[] = [];


  constructor(private route:ActivatedRoute,
    private todoService:TodoDataService) { }

  ngOnInit() {

    this.todoService.retrieveAllTodos('rocky').subscribe(
      response =>{
        console.log(response)
        this.todos = response;
      }
    )

  }

}
