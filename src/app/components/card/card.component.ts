import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() name?: string;
  @Input() imgUrl?: string;
  @Input() sale?: string;
  @Input() oldPrice?: number;
  @Input() newPrice?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
