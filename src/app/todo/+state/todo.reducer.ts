import { EntityState } from "@ngrx/entity";
import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { TodoActions } from "./todo.actions";
import { Tasc } from "./todo.model";


export const TODO_FEATURE_KEY='todo';


export interface TodoState extends EntityState<Tasc>  {
  loaded: boolean;
  selectedId?: string | number;

}

export const todoAdapter: EntityAdapter<Tasc> = createEntityAdapter<Tasc>();

export const initialState: TodoState = todoAdapter.getInitialState({
  loaded: false,
});

const todoReducer = createReducer(initialState,
  on(TodoActions.init, (state) => ({
    ...state,
    loaded:false
  })),
  on(TodoActions.loadTask,(state, {tasks}) => todoAdapter.setAll(tasks,{...state, loaded:true})),
  on(TodoActions.addTasks,(state, {task}) => todoAdapter.addOne(task,{...state, loaded:true})),
  on(TodoActions.removeTasks,(state, {id}) => todoAdapter.removeOne(id, state)),
  )

  export function reducer(state: TodoState | undefined, action: Action){

    return todoReducer(state,action)
  }
