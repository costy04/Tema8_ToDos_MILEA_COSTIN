import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { CreateTodosComponent } from './create-todos/create-todos.component';
import { DeleteTodosComponent } from './delete-todos/delete-todos.component';
import { FindTodoComponent } from './find-todo/find-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    CreateTodosComponent,
    DeleteTodosComponent,
    FindTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [TodosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
