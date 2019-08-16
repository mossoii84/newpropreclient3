import {Injectable} from "@angular/core";
import {Employee} from "./employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';


@Injectable()
export class ServiceEmployee{

  employees:Employee[]=[];
  private url="http://localhost:8080/employee/";
  constructor(private http:HttpClient){}

  getAllEmployee():Observable<Employee[]>{
   return this.http.get<Employee[]>(this.url);
  }

  saveAllEmployee(FormPostEmployee){
      return this.http.post(this.url,FormPostEmployee);
  }

  deleteEmployeeById(id:number){
    return this.http.delete(this.url+id);
  }

  putEmployeeById(formPostEmployee){
    return this.http.put(this.url+formPostEmployee.id, formPostEmployee);
  }





}
