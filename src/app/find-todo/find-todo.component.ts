import { Component } from '@angular/core';
import {FindTodoService} from "./find-todo.service";
import {ToDos} from "../todos/todos";

@Component({
  selector: 'app-find-todo',
  templateUrl: './find-todo.component.html',
  styleUrls: ['./find-todo.component.css']
})
export class FindTodoComponent {

  toDo: ToDos | undefined;
  id: number = -1;
  constructor(private findToDoService: FindTodoService) {
  }
  submitForm () {
    this.findToDoService.findToDo(this.id).subscribe(toDos => {
      this.toDo = toDos;
    })
  }

}
