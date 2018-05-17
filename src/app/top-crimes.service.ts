import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TopCrimesService {

  constructor(private http: HttpClient) { }

  getTopCrimes(){
    return this.http.get("http://nflarrest.com/api/v1/crime");

}
getTopPlayers(category: string){
    return this.http.get("http://nflarrest.com/api/v1/crime/topPlayers/"+category);
}

}
