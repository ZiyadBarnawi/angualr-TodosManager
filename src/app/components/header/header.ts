import { AfterViewInit, Component, inject, output, viewChild, ViewChild } from '@angular/core';
import { Http } from '../../services/http';
import { Todo } from '../../models/todo.model';
import bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  http = inject(Http);
  isAddingTodo = output<boolean>();
  openAddModal = async () => {
    this.isAddingTodo.emit(true);
  };
}
