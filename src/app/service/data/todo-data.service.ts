import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username:string){
    return this.http.get<Todo[]>(`http://localhost:9090/users/${username}/todos`);
  }

  deleteTodo(username:string, id:any){
    console.log(username)
    return this.http.delete(`http://localhost:9090/users/${username}/todos/${id}`)
  }

  getTodo(username:string, id:any){
    console.log(username)
    return this.http.get<Todo>(`http://localhost:9090/users/${username}/todos/${id}`)
  }

  updateTodo(username:string, id:any, todo:Todo){
    console.log(username)
    return this.http.put(`http://localhost:9090/users/${username}/todos/${id}`,todo)
  }

  addTodo(username:string, todo:Todo){
    console.log(username)
    return this.http.post(`http://localhost:9090/users/${username}/todos`,todo)
  }
}
