import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TareasService } from './todo/tareas.service';
import { Tarea } from './todo/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  _tasks: Tarea[] = this.tareasService.getTasks();

  get tasks() {
    return this._tasks;
  }

  set tasks(value: Tarea[]) {
    this._tasks = value;
    this.tareasService.saveTasks(this._tasks);
  }


  constructor(private tareasService: TareasService) { };

  updateTasks(newTask: Tarea): void {
    this.tasks = [...this.tasks, newTask]
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(value => value.id != id);
  }

}
