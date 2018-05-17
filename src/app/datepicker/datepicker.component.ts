import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct;
  @Output()
    dateChange = new EventEmitter();
  date: {year: number, month: number};
  constructor() {

  }

  ngOnInit() {
  }
  dateChnage(model){
    this.date = model;
    this.dateChange.emit(this.date);

   // console.log(this.date);
  }


}
