import { Component, OnInit } from '@angular/core';
import {TopCrimesService} from '../top-crimes.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {
  topCrimes;
  newDate;
  constructor(private topCrimeService: TopCrimesService) {

  }

  ngOnInit() {
    if(!this.newDate)
      this.topCrimeService.getTopCrimes().subscribe(res => this.topCrimes = res);

  }
  newSelectedDate(event){
    this.newDate = event;
   // console.log(this.newDate);
  }
}
