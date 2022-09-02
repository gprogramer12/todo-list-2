import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent{

  @Input() cuerpo?: string;

  eliminado: boolean = false;

  constructor() { }


  eliminar():void{
      this.eliminado = true;
  }

}
