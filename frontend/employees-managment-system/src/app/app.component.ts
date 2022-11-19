import {Component, OnInit} from '@angular/core';
import {Employee} from "./model/Employee";
import {EmployeeService} from "./employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employees-management-system';
  employees :Employee[] = [];

  tempEmployee:Employee = new Employee(0,"","","","","");


  constructor(private employeeService:EmployeeService) {}


  public onOpenModal(event:any)
  {

    const editModal:any = <any> document.getElementById("editModal");
    const deleteModal:any = <any> document.getElementById("deleteModal");
    const addModal:any = <any> document.getElementById("addModal");
    this.tempEmployee = event.employee;

    console.log(event.name);
    if(event.modalName=="edit") {
      editModal.showModal();
    }
    if(event.modalName=="delete")
      deleteModal.showModal();
    if(event.modalName=="add")
      addModal.showModal();

  }

  public onCloseModal(modalName:string)
  {
    const editModal:any = <any> document.getElementById("editModal");
    const deleteModal:any = <any> document.getElementById("deleteModal");
    const addModal:any = <any> document.getElementById("addModal");


    if(modalName=="edit")
      editModal.close();
    if(modalName=="delete")
      deleteModal.close();
    if(modalName=="add")
      addModal.close();



  }

  ngOnInit(): void
  {
    this.initializeEmployees();

  }

  initializeEmployees()
  {
    this.employeeService.getEmployees().subscribe(
      (response:Employee[])=>{this.employees =response}
    );
  }

  editEmployee(employee:Employee)
  {
    this.employeeService.editEmployee(employee).subscribe();
    this.onCloseModal("edit");
    location.reload()


  }
  deleteEmployee()
  {
    this.employeeService.deleteEmployee(this.tempEmployee.id).subscribe();
    this.onCloseModal("delete");
    location.reload()



  }

  addEmployee(event: any)
  {
    event.employee.id = undefined;
    this.employeeService.addEmployee(event.employee).subscribe();
    this.initializeEmployees();
    location.reload()


  }
}
