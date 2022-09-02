import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskcreatorComponent } from './taskcreator/taskcreator.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskcreatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TaskComponent,
    TaskcreatorComponent
  ]
})
export class TodoModule { }
