import { Component, Output, EventEmitter } from '@angular/core';
import { type Task } from 'src/app/Task';

type NewTask = Task;

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() create = new EventEmitter<NewTask>();

  onSubmit() {
    if (!this.text) {
      return alert('Please enter your task title!');
    }

    const newTask: NewTask = {
      id: crypto.randomUUID(),
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.create.emit(newTask);

    this.clearForm();
  }

  private clearForm() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
