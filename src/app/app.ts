import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('second-app');
  isAddingTodo = signal<boolean>(false);

  openAddModal = () => {
    this.isAddingTodo.set(true);
  };
  closeModal(): void {
    this.isAddingTodo.set(false);
  }
}
