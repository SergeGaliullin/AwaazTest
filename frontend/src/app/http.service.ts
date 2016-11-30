import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  projects_url: string = 'http://sergeigaliullin.pythonanywhere.com/api/projects/';
  tasks_url: string = 'http://sergeigaliullin.pythonanywhere.com/api/project/'
 

  constructor(private http: Http) {  }

  getProjectList(){
    const headers = new Headers();  
    headers.append("Accept", "application/json"); 

    return this.http.get(this.projects_url, {headers: headers})
    .map((response: Response ) => response.json() );
  }

  getProject(id: string) {    
    return this.http.get(this.projects_url + id)
    .map((response: any ) => response.json()) ;        
  }

  removeProject(id: string) {
    console.log("removing project " + id );
    const headers = new Headers({'Content-Type': 'application/json'});
    const url = `${this.projects_url}${id}/`;    
    return this.http.delete(url, {headers: headers})
      .toPromise()
      .then(() => null);       
  }

  getTasks(id: string) {    
    return this.http.get(this.tasks_url + id + '/tasks/')
    .map((response: any ) => response.json()) ;        
  }
}
