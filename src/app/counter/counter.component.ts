import { Component, OnInit } from '@angular/core';

// para crear mas rapido usar a- y elegir
//para hacer back sticks ` altGr + }
@Component({
  selector: 'app-counter',
  template: `
    <h3>{{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter(10)">Reset Counter</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value :number):void{
    this.counter += value; //metodo para aumentar y reducir el contador
  }

  resetCounter(value: number):void{
    this.counter = value; //metodo para resetear a 10 el contador
  }
}
