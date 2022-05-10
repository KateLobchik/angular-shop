import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCarouselComponent } from './main-carousel.component';



@NgModule({
  declarations: [
    MainCarouselComponent
  ],
  exports: [
    MainCarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainCarouselModule { }
