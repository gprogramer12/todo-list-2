import { createAction, props } from '@ngrx/store';
import { Tasc } from './todo.model';

const init = createAction('[Todo Component] Init');
const loadTask = createAction(
  '[Todo Component] Load Task',
  props<{ tasks: Tasc[] }>()
);

const addTasks = createAction(
  '[Todo Component] Add Task',
  props<{ task: Tasc }>()
);

const updateTask = createAction(
  '[Todo Component] Update Task',
  props<{ task: Tasc }>()
);

const removeTasks = createAction(
  '[Todo Component] Remove Task',
  props<{ id: string }>()
);

const removeAll = createAction('[Todo Component] Remove All');

export const TodoActions = {
  init,
  loadTask,
  addTasks,
  removeTasks,
  removeAll,
  updateTask
};
