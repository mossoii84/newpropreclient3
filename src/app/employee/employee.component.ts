import {Component, OnInit, ViewChild} from '@angular/core';
import {Employee} from "./employee";
import {FormControl, FormGroup} from "@angular/forms";
import {ServiceEmployee} from "./serviceemployee";
import {DataSource} from "@angular/cdk/table";
import {Observable} from "rxjs/Observable";
import {ServiceProject} from "../project/serviceproject";
import {Project} from "../project/project";



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  // к таблице Material
  dataSource = new UserDataSource(this.serviceEmployee);
  displayedColumns = ['id','name','age','projectId', 'projectName','delete','edit'];



  //задали переменную из Project в файле Employee, это удобнее чтобы выводить ВСЕ Projectы в списке,
  // а не только те что есть у Employee
  dataProject:Project[]=[];

  FormPostEmployee;
  constructor(public serviceEmployee:ServiceEmployee,public serviceProject:ServiceProject) { }
  ngOnInit(){
    this.FormPostEmployee = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      age:new FormControl(),
      projects:new FormControl()
    })
    //this.serviceEmployee.getAllEmployee().subscribe((data:Employee[])=>this.serviceEmployee.employees=data);
    this.serviceProject.getAllProjectForEmployee().subscribe((data:Project[])=>this.dataProject=data);
  }




//редактирование формы, заполняем ее уже существующей информацией
  setValueEmployee(FormPostEmployee){
    this.FormPostEmployee.setValue(FormPostEmployee);
  }


  //Запись формы в БД или редактирование
  clickCreatPost(FormPostEmployee){
    if(FormPostEmployee.id==null){
      this.serviceEmployee.saveAllEmployee(FormPostEmployee).subscribe((data:Employee)=>
      this.serviceEmployee.employees.push(data));
    }
  else
    {
    this.serviceEmployee.putEmployeeById(FormPostEmployee).subscribe((data:Employee)=>
    this.serviceEmployee.getAllEmployee());
    }
  }

  deleteEmployerById(id:number){
    this.serviceEmployee.deleteEmployeeById(id).subscribe((data:Employee)=>this.serviceEmployee.getAllEmployee())
   }

}

export class UserDataSource extends DataSource<any> {
  constructor(private serviceEmployee:ServiceEmployee) {
    super();}
  connect(): Observable<Employee[]> {
    return this.serviceEmployee.getAllEmployee();}
  disconnect(){}
}
