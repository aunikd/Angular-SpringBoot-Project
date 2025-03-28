import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id=''

  todos: Todo[] = [];

  deleteSuccessMsg:any;


  constructor(private route:ActivatedRoute,
    private todoService:TodoDataService,
    private router:Router) { }

  ngOnInit() {
    this.todos.sort((a, b) => b.targetDate.getTime() - a.targetDate.getTime());
    this.refreshTodos();

  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('rocky').subscribe(
      response =>{
        console.log('refreshhTODODSS')
        console.log(response)
        this.todos = response;
      }
    )
  }

  deleteTodo(id:any){
   this.todoService.deleteTodo('rocky',id).subscribe(

    response =>{
        this.deleteSuccessMsg =`Todo ${id} deleted `
        this.refreshTodos();
    }
   )
  }

  updateTodo(id:any){
    this.router.navigate(['todos',id]);  
   }

   addTodo(){
    this.router.navigate(['todos',-1]);   
   }

}
