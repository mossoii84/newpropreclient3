import {Project} from "../project/project";

export class Employee{
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public projects: Project[]) {}
}
