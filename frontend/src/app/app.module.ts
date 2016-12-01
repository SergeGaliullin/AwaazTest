import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './new-project/new-project.component';

import { HttpService } from './http.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NewProjectComponent,
    ProjectDetailsComponent,
    TasksComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot([      
      { path: '', component: ProjectsComponent },
      { path: 'new-project', component: NewProjectComponent },
      { path: 'project/:id', component: ProjectDetailsComponent },
      { path: 'project/:id/new-task', component: NewTaskComponent }
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
