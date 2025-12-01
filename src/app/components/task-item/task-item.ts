import { Component, EventEmitter, input, output, signal } from '@angular/core';
import { single } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task-item',
  imports: [Card],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  // TIP: Using signals is better for performance because values will only be recalculated when the signal value change not when the changes
  id = input(1); // the old Input syntax is => @Input id! : number
  todo = input<Todo>();
  selected = input<boolean>(false);
  selectedTodo = output<Todo>();
  onTodoCLicked(): void {
    this.selectedTodo.emit(this.todo() as Todo);
  }
}
