import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent} from './employee/employee.component';
import { ServiceEmployee } from './employee/serviceemployee';
import { ProjectComponent } from './project/project.component';
import {ServiceProject} from './project/serviceproject';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatTableModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatButtonModule, MatInputModule,
  MatIconModule
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'project', component: ProjectComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProjectComponent,

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MatTableModule,
    MatSelectModule, MatOptionModule, MatFormFieldModule, MatButtonModule,MatInputModule,MatIconModule,
    BrowserAnimationsModule,BrowserModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [ServiceEmployee,ServiceProject],
  bootstrap: [AppComponent]
})
export class AppModule {}
exports: [RouterModule]
