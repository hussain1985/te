import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aapcrime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {
  @Input()
  crime;
  constructor() { }

  ngOnInit() {
  }

}
