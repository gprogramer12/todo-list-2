import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskCreatorComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent,
    TaskCreatorComponent,
    ListComponent
  ]
})
export class TodoModule { }
