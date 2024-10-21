import { Injectable } from '@angular/core';
import {v4 as uuid}  from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'

})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name : 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ):void{
    // con ...character se le dice que tome todas las propiedades y que las esparza en lo que se creara
    const newCharacter: Character = { id: uuid(), ...character }

    //push para agregar al final, unshift añade al comienzo
    this.characters.push(newCharacter);
  }
  //onDeleteCharacter( index:number){
    //this.characters.splice(index, 1); //para borrar datos en un arreglo el ,1 es para que borre de uno en uno
  //}

  deleteCharacterById( id:string){
    this.characters = this.characters.filter( character => character.id !== id);
  }

}
