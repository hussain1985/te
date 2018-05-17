import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TopCrimesService} from './top-crimes.service';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import {HttpClientModule} from '@angular/common/http';
import { TopPlayersComponent } from './top-players/top-players.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from '@angular/router';
import { CrimeComponent } from './top-crimes/crime/crime.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersComponent,
    NavComponent,
    CrimeComponent,
    DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: TopCrimesComponent},
      {path: 'topcrimes/:category/topplayers', component: TopPlayersComponent}

    ])

  ],
  providers: [ TopCrimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
