import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TareasService } from './todo/tareas.service';
import { Tarea } from './todo/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private tareasService: TareasService) {}
}
