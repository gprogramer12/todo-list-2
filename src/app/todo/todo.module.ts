import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskComponent } from './task/task.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './+state/todo.reducer'
import { TodoEffects } from './+state/todo.effects';
import { EffectsModule } from '@ngrx/effects';
import {DragDropModule} from '@angular/cdk/drag-drop'


@NgModule({
  declarations: [
    TaskComponent,
    TaskCreatorComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    StoreModule.forFeature(fromTodo.TODO_FEATURE_KEY, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  exports: [
    TaskComponent,
    TaskCreatorComponent,
    ListComponent
  ]
})
export class TodoModule { }
