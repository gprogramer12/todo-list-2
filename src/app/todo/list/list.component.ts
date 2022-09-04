import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() tasks!: Tarea[];
  @Output() id = new EventEmitter<number>();

  sendDelete(id: number) {
    this.id.emit(id);
  }

  taskById(_index: number, task: Tarea) {
    return task.id
  }
}
