import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavModule} from "./components/nav/nav.module";
import {HeaderModule} from "./components/header/header.module";
import {MainCarouselModule} from "./components/main-carousel/main-carousel.module";
import {GamesCarouselModule} from "./components/games-carousel/games-carousel.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    HeaderModule,
    MainCarouselModule,
    GamesCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
