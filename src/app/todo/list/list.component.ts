import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTodo } from '../+state/todo.selector';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  constructor(private store: Store){}


  tasks = this.store.select(fromTodo.getAllTask)

}
