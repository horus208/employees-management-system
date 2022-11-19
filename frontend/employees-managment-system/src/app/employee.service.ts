import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "./model/Employee";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiBaseUrl:string = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

 public getEmployees()
  {
    const url= this.apiBaseUrl+"/employees";

    return this.http.get<Employee[]>(url);
  }

  public editEmployee(employee:Employee)
  {
    const url= this.apiBaseUrl+"/employees";


    return this.http.put(url,employee);
  }

  deleteEmployee(id:number) {
    const url= this.apiBaseUrl+"/employees/";

    return this.http.delete(url+`${id}`);

  }

  addEmployee(employee: Employee)
  {
    const url= this.apiBaseUrl+"/employees/";

    return this.http.post(url,employee);



  }
}
