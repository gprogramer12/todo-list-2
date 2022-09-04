
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCreatorComponent {
  @Output() sender = new EventEmitter<Tarea>();

  constructor() { }

  addTask(value: HTMLTextAreaElement): void {
    this.sender.emit({
      value: value.value,
      id: Math.random()
    });
    value.value = '';
  }


}
