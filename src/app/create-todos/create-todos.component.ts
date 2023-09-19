import { Component } from '@angular/core';
import {ToDos} from "../todos/todos";
import {HttpClient} from "@angular/common/http";
import {CreateTodosService} from "./create-todos.service";

@Component({
  selector: 'app-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.css']
})
export class CreateTodosComponent {

  todo: ToDos = {
    id: 0,
    title: '',
    description: '',
    done: false,
  };
  successMessage = '';

  constructor(private createToDosService: CreateTodosService) {
  }

  submitForm() {
    this.createToDosService.addToDo(this.todo);
    this.successMessage = 'ToDo adăugat cu succes';
  }
}
