import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent{
  @Input() tasks: Tarea[] = [];

  @Output() id = new EventEmitter<number>();
  sendDelete(id: number){
    this.id.emit(id);

  }
}
