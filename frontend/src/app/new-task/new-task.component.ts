import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

export class Task {  
  name: string;
  start_date: string;  
  end_date: string;
  description: string;
  project: string;
  id: string;
}

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent implements OnInit {
  task = {  
    name: '',
    start_date: '', 
    end_date: '',
    description: '',
    project: '',
    id: ''
  }

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {    
    this.httpService.postTask(this.task).subscribe(
      data => console.log(data)
    );
  }

  

}
