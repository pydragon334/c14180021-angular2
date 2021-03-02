import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { RouterModule, Routes } from "@angular/router";
import { GlobalvarService } from "./globalvar.service";
import { DetailComponent } from "./detail/detail.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { InputComponent } from "./input/input.component";

const ROUTES: Routes = [
  { path: "input", component: InputComponent },
  { path: "detail", component: DetailComponent },
  { path: "favorite", component: FavoriteComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    DetailComponent,
    FavoriteComponent,
    InputComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobalvarService]
})
export class AppModule {}
