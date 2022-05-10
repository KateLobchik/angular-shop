import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {BehaviorSubject, filter, interval, map, Subject, takeUntil, withLatestFrom} from "rxjs";

interface ICarouselContext<T> {
  $implicit: T,
  index: number,
  next: () => void,
  back: () => void
}

@Directive({
  selector: '[carousel]'
})
export class CarouselDirective<T> implements OnInit, OnDestroy {
  @Input() set carouselOf(items: T[] | undefined) {
    if(!items?.length) {
      this.viewContainerRef.clear();
      return;
    }

    this.items$.next(items);
    this.currentIndex$.next(0);
  };

  @Input() carouselAutoplay = false;

  private items$ = new BehaviorSubject<T[] | null>(null);
  private currentIndex$ = new BehaviorSubject<number>(0);
  private destroy$ = new Subject<void>();

  constructor(
    private templateRef: TemplateRef<ICarouselContext<T>>,
     private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    interval(2000)
      .pipe(
        filter(() => this.carouselAutoplay),
        takeUntil(this.destroy$)
      )
      .subscribe(() =>{
        this.next();
      })

    this.listenIndexChange();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  listenIndexChange() {
    this.currentIndex$
      .pipe(
        withLatestFrom(this.items$.pipe(filter(Boolean))),
        map(([index, items]) => this.getCurrentContext(index, items)),
        takeUntil(this.destroy$),
      )
      .subscribe((context) => {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef, context);
      })
  }

  getCurrentContext(index: number, items: T[]): ICarouselContext<T> {
    return {
      index,
      $implicit: items[index] as T,
      next: () => {
        this.next();
      },
      back: () => {
        this.back();
      }
    }
  }

  next() {
    const nextIndex = this.currentIndex$.value + 1;
    const itemsLength = (this.items$.value as T[]).length;

    if(nextIndex < itemsLength) {
      this.currentIndex$.next(nextIndex);

      return;
    }

    this.currentIndex$.next(0);
  }

  back() {

    const prevIndex = this.currentIndex$.value - 1;
    const itemsLength = (this.items$.value as T[]).length;

    if(prevIndex >= 0) {
      this.currentIndex$.next(prevIndex);

      return;
    }

    this.currentIndex$.next(itemsLength - 1);
  }
}
