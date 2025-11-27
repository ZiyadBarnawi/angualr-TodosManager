import { Component, input, OnInit, output } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-task-box',
  imports: [],
  templateUrl: './task-box.html',
  styleUrl: './task-box.css',
})
export class TaskBox {
  todo = input<Todo>();
  complete = output<Todo>();
  onToggleComplete = (): void => {
    this.complete.emit(this.todo() as Todo);
  };
}
