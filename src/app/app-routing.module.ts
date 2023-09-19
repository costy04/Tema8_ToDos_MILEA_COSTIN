import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import {CreateTodosComponent} from "./create-todos/create-todos.component";
import {DeleteTodosComponent} from "./delete-todos/delete-todos.component";
import {FindTodoComponent} from "./find-todo/find-todo.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'addToDo', component: CreateTodosComponent },
  { path: 'deleteToDo', component: DeleteTodosComponent },
  { path: 'findToDo', component: FindTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
