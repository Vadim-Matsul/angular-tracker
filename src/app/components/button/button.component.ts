import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() click = new EventEmitter<void>();
}
