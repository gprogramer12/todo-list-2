import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from '../+state/todo.actions';
import { Tasc } from '../+state/todo.model';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  @Input() cuerpo!: Tasc;

  constructor(private store: Store) {}

  eliminar(id: number): void {
    this.store.dispatch(TodoActions.removeTasks({ id: String(id) }));
  }
}
