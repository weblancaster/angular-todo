import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo';
  todos = ["buy bread"];

  addNewTodo = (todo: string) => {
    this.todos = [...this.todos, todo];
  }

  removeItem = (i: number) => {
    const updatedTodos = [...this.todos];

    updatedTodos.splice(i, 1);
    this.todos = updatedTodos;
  }
}
