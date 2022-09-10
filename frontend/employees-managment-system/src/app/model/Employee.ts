export class Employee
{
  id:number;
  name:string;
  email:string;
  jobTitle:string;
  imageUrl:string;
  employeeCode:string;


  constructor(id: number, name: string, email: string, jobTitle: string, imageUrl: string, employeeCode: string)
  {
    this.id = id;
    this.name = name;
    this.email = email;
    this.jobTitle = jobTitle;
    this.imageUrl = imageUrl;
    this.employeeCode = employeeCode;
  }

}
