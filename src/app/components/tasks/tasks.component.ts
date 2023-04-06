import { Component, OnInit } from '@angular/core';
import { type Subscription } from 'rxjs';

import { type Task, type Tasks } from 'src/app/Task';
import { TasksService } from 'src/app/services/tasks.service';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Tasks = [];
  displayForm: boolean = false;
  subscription?: Subscription;

  constructor(private tasksService: TasksService, private uiService: UIService) {
    this.subscription = this.uiService.onToggleDisplayForm().subscribe(value => {
      this.displayForm = value;
    });
  }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  toggleTaskReminder(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.updateTask(task).subscribe(() => {});
  }

  deleteTask(task: Task) {
    this.tasksService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }

  createNewTask(newTask: Task) {
    this.tasksService.addTask(newTask).subscribe(newTask => {
      this.tasks.push(newTask);
    });
  }

  onBtnClick() {
    this.uiService.toggleDisplayForm();
  }
}
