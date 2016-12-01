import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

export class Task {  
  name: string;
  end_date: Date;  
  start_date: Date;
  description: string;
  project: string;
  id: number;
}

@Component({
  selector: 'task-list',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  @Input() id: string;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getTasks(this.id).subscribe(
      data => {        
        this.tasks = data;        
      }
    );
  }

  

}
