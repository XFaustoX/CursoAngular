import { ChangeDetectionStrategy, Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrls: ['./add-character.component.css',]
})
export class AddCharacterComponentDbz {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //para crear

  public character: Character= {
    name: '',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);
    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character.name = '';
    this.character.power = 0;
  }
}
