import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

export class Project {  
  name: string;
  avatar: string;  
  duration: string;
  description: string;
  id: number;
}

export class Task {  
  name: string;
  end_date: Date;  
  start_date: Date;
  description: string;
  id: number;
}


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {
  id: string;
  project: Project;
  tasks: Task[];

  constructor(private httpService: HttpService, private aR: ActivatedRoute) {
    this.id = aR.snapshot.params['id'];
  }

  ngOnInit() {
    this.httpService.getProject(this.id).subscribe(
      data => {        
        this.project = data;        
      }
    );

    this.httpService.getTasks(this.id).subscribe(
      data => {        
        this.tasks = data;        
      }
    );
  }

}
