import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'To Do List';
  tasks: string[] = [];

  updateTasks(newTask: string):void{
    this.tasks.push(newTask);

  }


}
