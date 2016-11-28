import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

export class Project {  
  name: string;  
  duration: string;
  description: string;
  id: number;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];  

  constructor(private httpService: HttpService) {  }

    ngOnInit() {
      this.httpService.getProjectList().subscribe(
        data => {
          this.projects = data;
      }
    );


  }

}
