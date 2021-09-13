import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-add-task',
   templateUrl: './task-form.component.html',
   styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
   @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
   @Output() onEditTask: EventEmitter<Task> = new EventEmitter();
   id?: number;
   text!: string;
   day!: string;
   reminder: boolean = false;
   showForm: boolean = false;
   isEditing: boolean = false;
   addSubscription: Subscription;
   // editSubscription: Subscription;

   constructor(private uiService: UiService) {
      this.addSubscription = this.uiService.onToggle().subscribe((value) => {
         if (typeof value === 'object') {
            this.showForm = true;
            this.id = value.id;
            this.text = value.text;
            this.day = value.day;
            this.reminder = value.reminder;
            this.isEditing = true;
         } else {
            this.showForm = value;
            this.text = '';
            this.day = '';
            this.reminder = false;
            this.isEditing = false;
         }
      });
   }

   ngOnInit(): void {}

   onSubmit(isEditing: boolean) {
      if (!this.text) {
         alert('Please add a task!');
         return;
      }

      const newTask: Task = {
         text: this.text,
         day: this.day,
         reminder: this.reminder,
      };

      if (isEditing) {
         newTask.id = this.id;
         return this.onEditTask.emit(newTask);
      }

      this.text = '';
      this.day = '';
      this.reminder = false;

      this.onAddTask.emit(newTask);
   }
}
