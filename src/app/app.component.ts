import { Component, OnInit } from '@angular/core';
import { TareasService } from './todo/tareas.service';
import { Tarea } from './todo/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title: string = 'To Do List';
  tasks: Array<Tarea> = [{id: 2,value:'test'}];

  constructor(private service: TareasService){};

  ngOnInit(): void {
      this.service.getTasks().subscribe((value)=>{
        this.tasks = value!;
        if(!value){
          this.tasks = []
        }
      });

    }


  updateTasks(newTask: Tarea):void{
    this.tasks.push(newTask);
    this.service.saveTasks(this.tasks);

  }
  deleteTask(id: number){
       this.tasks = this.tasks.filter(value => value.id != id);
       this.service.saveTasks(this.tasks);
  }

}
