import { Component } from '@angular/core';
import {DeleteTodosService} from "./delete-todos.service";

@Component({
  selector: 'app-delete-todos',
  templateUrl: './delete-todos.component.html',
  styleUrls: ['./delete-todos.component.css']
})
export class DeleteTodosComponent {
  id: number = -1;
  successMessage = '';

  constructor(private deleteToDoService: DeleteTodosService) {
  }

  submitForm() {
    this.deleteToDoService.deleteTodo(this.id);
    this.successMessage = 'ToDo sters cu succes';
  }
}
