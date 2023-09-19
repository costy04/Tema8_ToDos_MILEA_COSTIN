import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDos} from "./todos";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDosService {
  apiUrl = "http://localhost:4000/todo"
  constructor(private http: HttpClient) {
  }
  getAllTodos() : Observable<ToDos[]> {
    return this.http.get<ToDos[]>(this.apiUrl);
  }

}
