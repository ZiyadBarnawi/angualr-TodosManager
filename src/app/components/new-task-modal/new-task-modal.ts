import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
  effect,
} from '@angular/core';

@Component({
  selector: 'app-new-task-modal',
  imports: [],
  templateUrl: './new-task-modal.html',
  styleUrl: './new-task-modal.css',
})
export class NewTaskModal {
  dialog = viewChild<HTMLDialogElement>('dialog');
  isAddingTodo = input<boolean>(false);
  isClosingModal = output<boolean>();
  openModal(): void {
    if (!this.isAddingTodo()) this.dialog()?.showModal();
  }
  onCloseModal(): void {
    this.isClosingModal.emit(true);
  }
}
