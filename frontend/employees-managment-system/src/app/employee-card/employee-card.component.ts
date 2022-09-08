import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../model/Employee";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {


  @Input() id: number = 2;
  @Input() name: string = "John Doe";
  @Input() email: string = "johnDoe@gmail.com";
  @Input() imageUrl: string =  "";
  @Input() jobTitle: string = "graphic designer";
  @Input() employeeCode: string = "E458";

/*
  constructor(id: number,name:string,email: string,jobTitle: string,imageUrl: string, employeeCode: string) {
    this.id = id;
    this.name =name;
    this.email = email;
    this.jobTitle = jobTitle;
    this.imageUrl = imageUrl;
    this.employeeCode=employeeCode;

  }

 */

  ngOnInit(): void {
  }

}
