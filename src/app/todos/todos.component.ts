import { Component } from '@angular/core';
import {ToDos} from "./todos";
import {ToDosService} from "./todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  allTodos: ToDos[] = [];
  constructor(private toDoService: ToDosService) {
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos () {
    this.toDoService.getAllTodos().subscribe(toDos => {
      this.allTodos = toDos;
    });
  }
}
