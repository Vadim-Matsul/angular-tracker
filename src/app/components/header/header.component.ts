import { Component } from '@angular/core';
import { Links } from 'src/app/common/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Angular-Tracker';
  Links = Links;
}
