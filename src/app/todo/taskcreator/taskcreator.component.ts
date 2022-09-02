
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-taskcreator',
  templateUrl: './taskcreator.component.html',
  styleUrls: ['./taskcreator.component.scss']
})
export class TaskcreatorComponent{
  @Output() sender = new EventEmitter<string>();

  constructor() {}

  addTask(value: HTMLTextAreaElement):void{
    this.sender.emit(value.value);
    value.value = '';
  }


}
