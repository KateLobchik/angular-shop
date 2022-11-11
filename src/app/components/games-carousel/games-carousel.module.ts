import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesCarouselComponent } from './games-carousel.component';
import {CarouselModule} from "../../directives/carousel/carousel.module";
import {CardModule} from "../card/card.module";



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
        CardModule,
    ]
})
export class GamesCarouselModule { }
