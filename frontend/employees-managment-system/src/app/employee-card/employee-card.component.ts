import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../model/Employee";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Output() editEvent:EventEmitter<any>  = new EventEmitter();
  @Output() deleteEvent:EventEmitter<any>  = new EventEmitter();

  @Input()employee:Employee = new Employee(0,"","","","","");


  ngOnInit(): void {
  }

  onEdit()
  {

    this.editEvent.emit({"modalName":"edit","employee":this.employee})
  }
  onDelete()
  {
    this.deleteEvent.emit({"modalName":"delete","employee":this.employee})
  }

}
