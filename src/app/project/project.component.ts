import { Component, OnInit } from '@angular/core';
import {ServiceProject} from "./serviceproject";
import {FormControl, FormGroup} from "@angular/forms";
import {Project} from "./project";
import {Employee} from "../employee/employee";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  FormPostProject;
  constructor( public serviceProject:ServiceProject) { }

  ngOnInit() {
    this.FormPostProject=new FormGroup({
      id: new FormControl(),
      name:new FormControl(""),
      theme:new FormControl(""),
      employee:new FormControl( [])
    })
   this.serviceProject.getAllProject();
  }


  setValueProject(FormPostProject){
    this.FormPostProject.setValue(FormPostProject);
  }

  //Запись формы в БД или редактирование
  CreatNewProject(FormPostProject){
    if(FormPostProject.id ==null){
     this.serviceProject.saveAllProject(FormPostProject).subscribe((data:Project)=>
       this.serviceProject.projects.push(data))
    }else {
      this.serviceProject.putEmployeeById(FormPostProject).subscribe((data:Project)=>
      this.serviceProject.getAllProject())
    }
  }

  delete(id:number){
      this.serviceProject.deleteProjectById(id).subscribe((data:Project)=>
      this.serviceProject.getAllProject())
  }







}
