import { Component, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html'
})
export class NewProjectComponent {
  @ViewChild("imageInput") imageInput;

  project_data = {
    name: '',
    image: '',
    description: '',
    duration: ''
  }

  constructor(private httpService: HttpService) { }  

  saveProject(): void {
    console.log(this.project_data);
    let fi = this.imageInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this.httpService.upload(fileToUpload)
            .subscribe(res => {
                console.log(res);
            });
    }
}


}
