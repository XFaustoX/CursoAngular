import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
//siempre es recomendable usar en private los constructores
  constructor(private dbzService: DbzService){}

  get characters():Character[]{
    //el return genera copias
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void{
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character: Character):void{
    this.dbzService.addCharacter(character);
  }
}
