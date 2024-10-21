import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from "./pages/main-page.component";

import { ListComponentDbz } from "./components/list/list.component";
import { AddCharacterComponentDbz } from "./components/add-character/add-character.component";


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponentDbz,
    AddCharacterComponentDbz
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
