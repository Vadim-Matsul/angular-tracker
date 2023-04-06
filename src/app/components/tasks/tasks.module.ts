import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { ButtonComponent } from '../button/button.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { CreateTaskComponent } from './create-task/create-task.component';

@NgModule({
  declarations: [TasksComponent, ButtonComponent, TaskItemComponent, CreateTaskComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  bootstrap: [TasksComponent],
})
export class TasksModule {}
