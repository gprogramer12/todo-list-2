import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTodo } from '../+state/todo.selector';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Tasc } from '../+state/todo.model';
import { Observable } from 'rxjs';
import { TodoActions } from '../+state/todo.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  constructor(private store: Store){}


  tasks: Observable<Tasc[]> = this.store.select(fromTodo.getAllTask)

  onDrop(event: CdkDragDrop<any>){
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
 this.store.dispatch(TodoActions.loadTask({tasks:event.container.data}));

  }
}
