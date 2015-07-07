/// <reference path="./typings/tsd.d.ts" />

import {NgFor, Component, View} from 'angular2/angular2';
import {Store, Todo, TodoFactory} from './services/TodoStore';

@Component({
  selector: 'todo-comp',
  appInjector: [Store, TodoFactory]
})

@View({
  templateUrl: './todo.html',
  directives: [NgFor]
})

export class TodoComp {
  todos: Array<Todo> = [];

  constructor(public todoStore: Store, public factory: TodoFactory) {
    this.todos = todoStore.list;
  }

  enterTodo(inputElement): void {
    this.addTodo(inputElement.value);
    inputElement.value = '';
  }

  addTodo(newTitle: string): void {
    this.todoStore.add(this.factory.create(newTitle, false));
  }

  deleteMe(todo: Todo): void { this.todoStore.remove(todo); }


}
