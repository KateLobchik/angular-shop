import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesCarouselComponent } from './games-carousel.component';
import {CarouselModule} from "../../directives/carousel/carousel.module";



@NgModule({
    declarations: [
        GamesCarouselComponent
    ],
    exports: [
        GamesCarouselComponent
    ],
  imports: [
    CommonModule,
    CarouselModule,
  ]
})
export class GamesCarouselModule { }
