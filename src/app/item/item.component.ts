import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class ="todo-item">
      <div class="todo-title" [ngClass]="{'todo-complete': isComplete}">
        <input type="checkbox" (click)="completeItem()" class="todo-checkbox"/>
      {{ todoItem.title }}
      </div>
      <button (click)="removeItem()" class="btn btn-red">
        Remove
      </button>
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem;
  @Output() remove:EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete;
  }
  constructor() {
  }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.todoItem);
  }
}
