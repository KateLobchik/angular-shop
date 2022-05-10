import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-games-carousel',
  templateUrl: './games-carousel.component.html',
  styleUrls: ['./games-carousel.component.scss']
})
export class GamesCarouselComponent implements OnInit {

  @Input() list: any;

  constructor() { }

  ngOnInit(): void {
  }

}
