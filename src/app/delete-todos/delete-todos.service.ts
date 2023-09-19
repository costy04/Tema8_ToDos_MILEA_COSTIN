import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ToDos} from "../todos/todos";

@Injectable({
  providedIn: 'root'
})

export class DeleteTodosService {
  apiUrl = "http://localhost:4000/todo"

  constructor(private http: HttpClient) {
  }

  deleteTodo (id: number) {
    this.http.delete(this.apiUrl + "/" + id).subscribe();
  }

}
