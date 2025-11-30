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
    //TIP: Angular automatically stringifies the body.
    //TIP: Angular automatically sets Content-Type: application/json when the body is an object, but adding it explicitly is fine.
    return this.http.post('https://dummyjson.com/todos/add', todo, {
      headers: { 'Content-Type': 'application/json' },
    });
    // return await fetch('https://dummyjson.com/todos/add', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     todo: 'Use DummyJSON in the project',
    //     completed: false,
    //     userId: 5,
    //   }),
    // });
  };
}
