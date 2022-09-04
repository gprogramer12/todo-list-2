import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarea } from './task.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  saveTasks(tasks: Tarea[]){
      localStorage.setItem('tarea', JSON.stringify(tasks));
  }

  getTasks():Observable<Tarea[]>{
      return of(JSON.parse(localStorage.getItem('tarea')!));

  }
}
