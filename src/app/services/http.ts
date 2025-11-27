import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class Http {
  http = inject(HttpClient);

  getTodos = async () => {
    return this.http.get('https://dummyjson.com/todos?limit=30&delay=2000');
  };
  addTodo = async (todo: Todo) => {
    this.http.post('https://dummyjson.com/todos/add', todo);
  };
}
