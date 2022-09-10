import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Employee} from "../model/Employee";

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {
  @Output() closeEvent:EventEmitter<any> = new EventEmitter<any>();
  @Output() confirmEvent:EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  onClose() {

    this.closeEvent.emit("add")

  }
  onConfirm(name:string,jopTitle:string,email:string,imageUrl:string,employeeCode:string)
  {
    let employee:Employee  =new Employee(100,name,jopTitle,email,imageUrl,employeeCode);
    this.confirmEvent.emit({"modalName":"add","employee":employee})
  }
}
