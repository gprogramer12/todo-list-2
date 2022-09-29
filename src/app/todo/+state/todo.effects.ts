import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { tap, map, exhaustMap, withLatestFrom, mergeMap } from 'rxjs';
import { TareasService } from '../tareas.service';
import { TodoActions } from './todo.actions';
import { fromTodo } from './todo.selector';

@Injectable()
export class TodoEffects implements OnInitEffects {
  update$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          TodoActions.addTasks,
          TodoActions.removeTasks,
          TodoActions.loadTask,
          TodoActions.removeAll
        ),
        withLatestFrom(this.store.select(fromTodo.getAllTask)),
        tap((inpca) => this.todoService.saveTasks(inpca[1]))
      ),
    { dispatch: false }
  );

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.init),
      exhaustMap(() =>
        this.todoService.getTasks().pipe(
          map((data: any) => {
            return TodoActions.loadTask({ tasks: data });
          })
        )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return TodoActions.init();
  }

  constructor(
    private actions$: Actions,
    private store: Store,
    private todoService: TareasService
  ) {}
}
