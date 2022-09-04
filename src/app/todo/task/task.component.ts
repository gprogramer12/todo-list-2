import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent{

  @Input() cuerpo: Tarea = {id: 0, value: ''};
  @Output() idSender= new EventEmitter<number>();

  constructor() { }


  eliminar(id: number):void{
      this.idSender.emit(id);

        }

}
