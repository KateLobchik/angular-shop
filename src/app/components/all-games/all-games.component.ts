import {Component, ElementRef, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import {gamesList} from "../../mocks/game-list";

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent {
  @Input() list = gamesList;

  sortList = sortList;
  selectItem = this.sortList[0];
}

const sortList = [
  {
    label: 'Новинки',
    code: 'new'
  },
  {
    label: 'По алфавиту',
    code: 'abc'
  },
  {
    label: 'Цена: по возрастанию',
    code: 'priceup'
  },
  {
    label: 'Цена: по убыванию',
    code: 'pricedown'
  }
]
