import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllGamesComponent} from "./components/all-games/all-games.component";
import {GamePageComponent} from "./components/game-page/game-page.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {GamesCarouselModule} from "./components/games-carousel/games-carousel.module";
import {MainCarouselModule} from "./components/main-carousel/main-carousel.module";
import {CommonModule} from "@angular/common";
import {CardModule} from "./components/card/card.module";
import {DropdownModule} from "./components/dropdown/dropdown.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TestInputModule} from "./components/test-input/test-input.module";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "all-games",
    component: AllGamesComponent
  },
  {
    path: 'game-page',
    component: GamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GamesCarouselModule, MainCarouselModule, CommonModule, CardModule, DropdownModule, FormsModule, TestInputModule, ReactiveFormsModule],
  declarations: [
    MainPageComponent,
    AllGamesComponent,
    GamePageComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
