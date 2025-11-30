import { Component, input, output, viewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '../../services/http';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../models/todo.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-new-task-modal',
  imports: [FormsModule],
  templateUrl: './new-task-modal.html',
  styleUrl: './new-task-modal.css',
})
export class NewTaskModal {
  http = inject(Http);
  dialog = viewChild<HTMLDialogElement>('dialog');
  isAddingTodo = input<boolean>(false);
  isClosingModal = output<boolean>();
  //TIP: Angular will handle signals automatically when using two-ways binding.
  // inputTitle = ''; //works too for 2-ways-binding
  // inputTitle  = signal('');
  inputTitle = '';
  inputId = '';
  newTodo = output<Todo>();

  onCloseModal(): void {
    this.isClosingModal.emit(true);
  }
  async onSubmit(): Promise<void> {
    console.log(` ID: ${this.inputId}`);
    console.log(` Title: ${this.inputTitle}`);
    if (!parseInt(this.inputId)) {
      throw new Error('The entered ID is not a number');
    }
    const newTodo = await this.http.addTodo({
      todo: this.inputTitle,
      completed: false,
      userId: parseInt(this.inputId),
    } as Todo);

    newTodo
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((todo) => {
        console.log(todo);
        this.newTodo.emit(todo as Todo);
      });
  }
}
