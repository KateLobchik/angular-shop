import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-games-carousel',
  templateUrl: './games-carousel.component.html',
  styleUrls: ['./games-carousel.component.scss']
})
export class GamesCarouselComponent<T> implements OnInit {

  carouselTranslateX$ = new BehaviorSubject(0);

  @ViewChild('listGame') listGame?: ElementRef;

  @Input() list: any;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.carouselTranslateX$.value < 50 ? this.carouselTranslateX$.next(this.carouselTranslateX$.value + 10)
      : this.carouselTranslateX$.next(50);
    (this.listGame?.nativeElement as HTMLElement).style.transform = `translateX(-${this.carouselTranslateX$.value}%)`;
  }

  back() {
    this.carouselTranslateX$.value > 0 ? this.carouselTranslateX$.next(this.carouselTranslateX$.value - 10)
      : this.carouselTranslateX$.next(0);
    (this.listGame?.nativeElement as HTMLElement).style.transform = `translateX(-${this.carouselTranslateX$.value}%)`;
  }

}
