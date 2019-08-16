import {Injectable} from "@angular/core";
import {Project} from "./project";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ServiceProject{

  projects:Project[]=[];
  private url="http://localhost:8080/project/";
  constructor(private http:HttpClient){}

  getAllProject(){
    return this.http.get(this.url).subscribe((data:Project[])=>this.projects=data);
  }
  getAllProjectForEmployee(){
    return this.http.get(this.url);
  }

  saveAllProject(FormPostProject){
    return this.http.post(this.url,FormPostProject);
  }

  deleteProjectById(id:number){
    return this.http.delete(this.url + id);
  }

  putEmployeeById(FormPostProject){
    return this.http.put(this.url+FormPostProject.id,FormPostProject);
  }




}
