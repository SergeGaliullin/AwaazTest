import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

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
    this.task.project = "1";    
    this.httpService.postTask(this.task).subscribe(
      data => console.log(data)
    );
  }

  

}
