import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username:string){
    console.log('refreshhTODODSS')

    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username:string, id:any){
    console.log(username)
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  getTodo(username:string, id:any){
    console.log(username)
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username:string, id:any, todo:Todo){
    console.log(username)
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,todo)
  }

  addTodo(username:string, todo:Todo){
    console.log(username)
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`,todo)
  }
}
