import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app">
    <h1>
      {{ welcome }}
    </h1>
    <todo-input (submit)="addItem($event)"></todo-input>
    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
      </li>
    </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  welcome = 'Todo List';
  todoList;
  addItem(title: string) {
    this.todoList = this.todoListService.addItem(title);
  }
  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

}
