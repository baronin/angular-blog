import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {catchError, delay} from 'rxjs/operators';
import {throwError} from 'rxjs';

export interface Todo {
  completed?: boolean;
  id?: number;
  title?: string;
  userId?: number;
}

@Component({
  selector: 'app-work-with-api',
  templateUrl: './work-with-api.component.html',
  styleUrls: ['./work-with-api.component.scss']
})
export class WorkWithApiComponent implements OnInit {

  loading = false;
  url: string = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
  todos: Todo[] = [];
  todoTitle: string;
  errorMessage: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uploadPost();
  }

  addTodo(): any {
    if (!this.todoTitle.trim()) {
      return;
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.http.post('https://jsonplaceholder.typicode.com/todos', newTodo).subscribe(
      response => {
        this.todos.unshift(response);
        this.todoTitle = '';
        console.log('response: ', response);
      }
    );
  }

  uploadPost(): any {
    this.loading = true;
    this.http.get<Todo[]>(this.url, {
      headers: new HttpHeaders({token: 'test token'}),
      params: {
        login: 'login',
        password: 'password'
      }
    })
      .pipe(
        delay(1000),
        catchError((err, caught) => {
          console.log('caught: ', caught);
          return throwError(err);
        })
      )
      .subscribe(
      response => {
        this.todos = response;
        this.loading = false;
        console.log('response: ', response);
      },
        error => {
          console.log('error: ', error.message);
          this.errorMessage = error.message;
        }
    );
  }

  removeTodo(id: number): any {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(
      response => {
        this.todos = this.todos.filter(
          t => t.id !== id
        );
        console.log('response: ', response);
      }
    );
  }

  completeTodo(id: number): any {
    this.http.put<any>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true,
    })
      .subscribe(
        todo => {
          this.todos.find(t => t.id === todo.id).completed = true;
        }
    );
  }
}
