import { Component, input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from './../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.completeTask(this.task().id);
  }
}
