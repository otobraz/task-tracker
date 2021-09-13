import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
   { path: '', component: TasksComponent },
   { path: 'about', component: AboutComponent },
];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      ButtonComponent,
      TasksComponent,
      TaskItemComponent,
      TaskFormComponent,
      AboutComponent,
      FooterComponent,
   ],
   imports: [
      BrowserModule,
      FontAwesomeModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes),
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
