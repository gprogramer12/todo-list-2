import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tasc } from './+state/todo.model';
import { Tarea } from './task.interface';

const TASK_KEY = 'tarea';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  saveTasks(tasks: Tasc[]):void{
      console.log(tasks)
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks));

  }

  getTasks(): Observable<Tasc[]> {
    return localStorage.getItem(TASK_KEY) ? of(JSON.parse(localStorage.getItem(TASK_KEY) ?? '')) : of([])
  }
}
