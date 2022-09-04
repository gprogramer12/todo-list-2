import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Input() cuerpo!: Tarea;
  @Output() idSender = new EventEmitter<number>();

  eliminar(id: number): void {
    this.idSender.emit(id);
  }

}
