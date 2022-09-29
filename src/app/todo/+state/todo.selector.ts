import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoAdapter, TodoState, TODO_FEATURE_KEY } from './todo.reducer';

const getTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);
const { selectAll} = todoAdapter.getSelectors();

export const getAllTask = createSelector(getTodoState, (state: TodoState) =>
  selectAll(state)
);

export const getUndoneTasks = createSelector(getAllTask, (tasks )=> tasks.filter(value=> !value.done))
export const getDoneTasks = createSelector(getAllTask, (tasks )=> tasks.filter(value=> value.done))

export const fromTodo = {
  getAllTask,
  getUndoneTasks,
  getDoneTasks
};
