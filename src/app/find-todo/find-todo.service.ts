import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ToDos} from "../todos/todos";

@Injectable({
  providedIn: 'root'
})

export class FindTodoService {
  apiUrl = "http://localhost:4000/todo"

  constructor(private http: HttpClient) {
  }

  findToDo (id: number): Observable<ToDos> {
    return this.http.get<ToDos>(this.apiUrl + "/" + id);
  }
}
