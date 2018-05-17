import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TopCrimesService} from '../top-crimes.service';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  category;
  topPlayers;

  constructor(private route: ActivatedRoute, private crimeService: TopCrimesService) {

    //this.category = this.route.snapshot.paramMap.get('category');
    this.route.params.subscribe( (params: Params) => {
      this.category = params['category'];
    })

    if(this.category){

      this.crimeService.getTopPlayers(this.category).subscribe(res => {
       this.topPlayers = res;
      });

    }

  }

  ngOnInit() {
  }

}
