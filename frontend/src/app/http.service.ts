import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  projects_url: string = 'http://localhost:8000/api/projects/';
 

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
}
