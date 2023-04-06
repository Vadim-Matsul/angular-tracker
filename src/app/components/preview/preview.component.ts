import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
})
export class PreviewComponent {
  totalTasks: string | number = '';

  constructor(private tasksService: TasksService) {
    const initial = 'You dont have any tasks';

    this.tasksService.getTasks().subscribe(tasks => {
      if (!tasks.length) {
        this.totalTasks = initial;
      } else {
        this.totalTasks = tasks.length;
      }
    });
  }
}
