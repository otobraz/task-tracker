import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
   selector: 'app-task-item',
   templateUrl: './task-item.component.html',
   styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
   @Input() task!: Task;
   @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
   @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
   @Output() onSelectTask: EventEmitter<Task> = new EventEmitter();
   editingTask: boolean = false;
   subscription: Subscription;
   faTrashAlt = faTrashAlt;
   faPencilAlt = faEdit;

   constructor(private uiService: UiService) {
      this.subscription = this.uiService
         .onSelect()
         .subscribe((value) => (this.editingTask = value.isEditing));
   }

   ngOnInit(): void {}

   onDelete(task: Task) {
      this.onDeleteTask.emit(task);
   }

   onToggle(task: Task) {
      this.onToggleReminder.emit(task);
   }

   editTask(task: Task) {
      this.uiService.toggleSelectTask(task);
   }
}
