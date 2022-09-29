
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from '../+state/todo.actions';
import { Tasc } from '../+state/todo.model';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCreatorComponent {
  @Output() sender = new EventEmitter<Tarea>();

  constructor(private store: Store) { }

  addTask(value: HTMLTextAreaElement): void {
    this.store.dispatch(TodoActions.addTasks({task:{
      id: Math.floor(Math.random()*2931),
      value: String(value.value)

    }}))

    value.value = "";
  }


}
