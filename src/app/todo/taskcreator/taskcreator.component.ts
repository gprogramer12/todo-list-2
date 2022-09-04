
import { Component, EventEmitter, Output} from '@angular/core';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-taskcreator',
  templateUrl: './taskcreator.component.html',
  styleUrls: ['./taskcreator.component.scss']
})
export class TaskcreatorComponent{
  @Output() sender = new EventEmitter<Tarea>();

  constructor() {}

  addTask(value: HTMLTextAreaElement):void{
    this.sender.emit({value:value.value,
                      id: Math.random()});
    value.value = '';
  }


}
