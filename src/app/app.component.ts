import { Component, OnInit } from '@angular/core';
import { gamesList } from "./mocks/game-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {

  mockGamesList = gamesList;

  constructor() {
  }

  ngOnInit() {
  }
}
