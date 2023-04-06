import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { type Task, type Tasks } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private api_url = `http://localhost:4201/tasks`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.api_url, newTask, this.httpOptions);
  }

  getTasks(): Observable<Tasks> {
    return this.http.get<Tasks>(this.api_url, this.httpOptions);
  }

  updateTask(newTask: Task): Observable<Task> {
    const api = `${this.api_url}/${newTask.id}`;
    return this.http.put<Task>(api, newTask, this.httpOptions);
  }

  deleteTask(task: Task): Observable<Object> {
    const api = `${this.api_url}/${task.id}`;
    return this.http.delete(api, this.httpOptions);
  }
}
