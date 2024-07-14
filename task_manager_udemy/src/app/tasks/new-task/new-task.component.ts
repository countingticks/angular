import { Component, input, output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();
  addTask = output<NewTask>();
  enteredTitle = signal<string>('');
  enteredSummary = signal<string>('');
  enteredDate = signal<string>('');

  private taskService = inject(TasksService);

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      this.userId(),
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      }
    );

    this.onClose();
  }
}
