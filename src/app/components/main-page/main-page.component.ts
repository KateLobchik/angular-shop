import { Component, OnInit } from '@angular/core';
import {gamesList} from "../../mocks/game-list";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  mockGamesList = gamesList;

  constructor() { }

  ngOnInit(): void {
  }

}
