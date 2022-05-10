import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselDirective } from './carousel.directive';



@NgModule({
  declarations: [
    CarouselDirective
  ],
  exports: [
    CarouselDirective
  ],
  imports: [
    CommonModule
  ]
})
export class CarouselModule { }
