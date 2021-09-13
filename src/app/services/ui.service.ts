import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../Task';

@Injectable({
   providedIn: 'root',
})
export class UiService {
   private showForm: boolean = false;
   private showEditTask: boolean = false;
   private addSubject: Subject<boolean | Task> = new Subject();
   private editSubject: Subject<any> = new Subject();

   constructor() {}

   toggleForm(): void {
      this.showForm = !this.showForm;
      this.addSubject.next(this.showForm);
   }

   toggleSelectTask(task: Task): void {
      this.showForm = true;
      // this.addSubject.next(task);
      // this.showEditTask = !this.showEditTask;
      this.addSubject.next(task);
   }

   onToggle(): Observable<any> {
      return this.addSubject.asObservable();
   }

   onSelect(): Observable<any> {
      return this.editSubject.asObservable();
   }
}
