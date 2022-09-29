import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { fromTodo } from '../+state/todo.selector';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Tasc } from '../+state/todo.model';
import { map, merge, mergeMap, Observable, take } from 'rxjs';
import { TodoActions } from '../+state/todo.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  constructor(private store: Store) {}

  undoneTasks: Observable<Tasc[]> = this.store.select(fromTodo.getUndoneTasks);
  doneTasks: Observable<Tasc[]> = this.store.select(fromTodo.getDoneTasks);


   onDrop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
        var  all = this.doneTasks.pipe(mergeMap(task=>this.undoneTasks.pipe(map(task2=>[...task,...task2]))),take(1))
        all.subscribe(value=>this.store.dispatch(TodoActions.loadTask({tasks:value})))

    }else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);

        this.store.dispatch(TodoActions.updateTask({task:event.container.data[event.currentIndex]}))
    }


  }
}
