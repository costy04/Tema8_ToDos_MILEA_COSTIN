import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDos} from "../todos/todos";

@Injectable({
  providedIn: 'root'
})
export class CreateTodosService {
  apiUrl = "http://localhost:4000/todo"
  constructor(private http: HttpClient) { }

  addToDo (toDo : ToDos) {
    this.http.post(this.apiUrl, toDo).subscribe()
  }
}
