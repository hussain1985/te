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
  constructor(private topCrimeService: TopCrimesService) {
    topCrimeService.getTopCrimes().subscribe(res => this.topCrimes = res);

  }

  ngOnInit() {
  }

}
