import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskcreatorComponent } from './taskcreator/taskcreator.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskcreatorComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TaskComponent,
    TaskcreatorComponent,
    ListComponent
  ]
})
export class TodoModule { }
