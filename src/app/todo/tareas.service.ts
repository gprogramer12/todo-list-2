import { Injectable } from '@angular/core';
import { Tarea } from './task.interface';

const TASK_KEY = 'tarea';
@Injectable({
  providedIn: 'root'
})
export class TareasService {

  saveTasks(tasks: Tarea[]) {
    localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
  }

  getTasks(): Tarea[] {
    return localStorage.getItem(TASK_KEY) ? JSON.parse(localStorage.getItem(TASK_KEY) ?? '') : []
  }
}
