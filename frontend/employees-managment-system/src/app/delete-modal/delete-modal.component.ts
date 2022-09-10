import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Output() closeEvent:EventEmitter<any> = new EventEmitter<any>();
  @Output() confirmEvent:EventEmitter<any> = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }
  onClose()
  {
    this.closeEvent.emit("delete");
  }

  onConfirm() {
    this.confirmEvent.emit();

  }
}
