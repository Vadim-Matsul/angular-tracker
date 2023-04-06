import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Routes } from './common/router';
import { TasksModule } from './components/tasks/tasks.module';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PreviewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    TasksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
