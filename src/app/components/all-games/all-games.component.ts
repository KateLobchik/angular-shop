import {Component, Input, OnInit} from '@angular/core';
import {gamesList} from "../../mocks/game-list";

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {

  @Input() list = gamesList;

  constructor() { }

  ngOnInit(): void {
  }

}
