import { type Route } from '@angular/router';
import { TasksComponent } from '../components/tasks/tasks.component';
import { PreviewComponent } from '../components/preview/preview.component';

export enum Links {
  main = '',
  preview = 'preview',
}
export const Routes: Route[] = [
  { path: Links.main, component: TasksComponent },
  { path: Links.preview, component: PreviewComponent },
];
