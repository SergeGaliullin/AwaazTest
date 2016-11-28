import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewProjectComponent } from './new-project/new-project.component';

import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
        RouterModule.forRoot([      
      { path: '', component: ProjectsComponent },
      { path: 'new-project', component: NewProjectComponent }           
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
