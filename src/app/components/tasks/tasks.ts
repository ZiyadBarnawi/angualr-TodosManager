import { AfterViewInit, Component, inject, input, OnInit, output, signal } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { TaskBox } from '../task-box/task-box';
import { Todo } from '../../models/todo.model';
import { Http } from '../../services/http';
import { catchError } from 'rxjs';
import * as bootstrap from 'bootstrap';
import { NewTaskModal } from '../new-task-modal/new-task-modal';

@Component({
  selector: 'app-tasks',
  imports: [TaskItem, TaskBox, NewTaskModal],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  http = inject(Http);

  loading = signal<boolean>(true);
  error = signal<boolean>(false);
  todos = signal<Array<Todo>>([]);
  todo = signal<Todo>({ id: '0', userId: 0, completed: false, todo: '' });
  isAddingTodo = input<boolean>(false);
  newTodo = input<Todo>();
  isCLosingModal = output<boolean>();

  async ngOnInit(): Promise<void> {
    const data = await this.http.getTodos();
    data
      .pipe(
        catchError((err) => {
          this.error.set(true);
          throw err;
        })
      )
      .subscribe((data: any) => {
        this.loading.set(false);
        this.todos.set(data.todos);
        this.todo.set(data.todos[0]);
      });
  }

  onSelectTask(todo: Todo): void {
    this.todo.set(todo);
  }
  onToggleComplete = (todo: Todo): void => {
    todo.completed = !todo.completed;
  };
  onCLosingModal(): void {
    this.isCLosingModal.emit(true);
  }
  onNewTodo(todo: Todo) {
    this.todos.update((todos) => {
      todo.id = `${todos.length + 1}`;
      todos.push(todo);
      return todos;
    });
  }
}
