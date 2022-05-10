import {Component, OnDestroy, OnInit} from '@angular/core';
import { mainGamesList } from "../../mocks/main-game-list";
import {BehaviorSubject, filter, interval, map, Subject, takeUntil, withLatestFrom} from "rxjs";

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit, OnDestroy {

  mainGamesList = mainGamesList;
  currentGameImg = '';
  currentGameName = '';
  currentGameIndex$ = new BehaviorSubject<number>(0);
  private destroy$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    this.currentGameImg = this.mainGamesList[0].img.main;
    this.currentGameName = this.mainGamesList[0].name;

    interval(8000)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() =>{
        this.autoplay();
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  autoplay() {
    const nextIndex = this.currentGameIndex$.value + 1;
    const itemsLength = this.mainGamesList.length;
    if(nextIndex < itemsLength) {
      this.changeCurrentGameIndex(nextIndex);
      return;
    }
    this.changeCurrentGameIndex(0);
  }

  changeCurrentGameIndex(index: number) {
    this.currentGameIndex$.next(index);
    this.currentGameImg = this.mainGamesList[index].img.main;
    this.currentGameName = this.mainGamesList[index].name;
  }

}
