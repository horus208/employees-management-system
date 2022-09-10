import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../model/Employee";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
@Output() closeEvent:EventEmitter<any> = new EventEmitter<any>();
@Output() confirmEvent:EventEmitter<any> = new EventEmitter<any>();


  @Input() employee:Employee = new Employee(0,"temp","temp","temp","temp","temp");

  constructor() { }

  ngOnInit(): void {
  }

  onClose()
  {
    this.closeEvent.emit({"name":"edit"});
  }

  onSubmit(name:string,jopTitle:string,email:string,imageUrl:string)
  {
    this.employee.name = name;
    this.employee.jobTitle = jopTitle;
    this.employee.email = email;
    this.employee.imageUrl = imageUrl;
    this.confirmEvent.emit({"name":"edit","employee":this.employee});

  }

  setEmployee(employee:Employee)
  {
    this.employee = employee;
  }

}
