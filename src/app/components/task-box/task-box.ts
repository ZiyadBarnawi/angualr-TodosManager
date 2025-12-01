import { Component, input, OnInit, output } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task-box',
  imports: [Card, DatePipe],
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
