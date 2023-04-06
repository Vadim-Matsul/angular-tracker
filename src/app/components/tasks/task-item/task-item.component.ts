import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes, type IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task?: Task;
  icon: IconDefinition = faTimes;
  @Output() dblClick = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<Task>();

  onDblClick() {
    if (!this.task) return;
    this.dblClick.emit(this.task);
  }

  onDelete() {
    if (!this.task) return;
    this.delete.emit(this.task);
  }
}
