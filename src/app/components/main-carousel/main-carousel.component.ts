import {Component, OnDestroy, OnInit} from '@angular/core';
import { mainGamesList } from "../../mocks/main-game-list";
import {
  BehaviorSubject, concatMap,
  filter,
  interval,
  map, Observable,
  startWith,
  Subject, Subscription,
  switchMap,
  takeUntil,
  timer,
  withLatestFrom
} from "rxjs";

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit, OnDestroy {

  slideTimer$ = new Subscription();

  mainGamesList = mainGamesList;
  currentGameImg = '';
  clickNext = false;
  currentGameName = '';
  currentGameIndex$ = new BehaviorSubject<number>(0);
  private destroy$ = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    this.currentGameImg = this.mainGamesList[0].img.main;
    this.currentGameName = this.mainGamesList[0].name;

    this.refreshTimer();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  refreshTimer(): void {
    this.destroy$.next(); // или this.slideTimer$.unsubsribe() ???
    this.slideTimer$ = interval(8000)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() =>{
        this.autoplay();
      });
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
    this.refreshTimer();
    this.currentGameIndex$.next(index);
    this.currentGameImg = this.mainGamesList[index].img.main;
    this.currentGameName = this.mainGamesList[index].name;
  }

  click(index: number) {
    if (this.currentGameIndex$.value !== index) {
      this.clickNext = true;
      setTimeout(() => {
        this.clickNext = false;
        this.changeCurrentGameIndex(index);
      }, 160)
    }
  }

}
