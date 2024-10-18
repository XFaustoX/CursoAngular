import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Fausto DEV';
  public counter: number = 10;

  increaseBy(value :number):void{
    this.counter += value; //metodo para aumentar y reducir el contador
  }

  resetCounter(value: number):void{
    this.counter = value;
  }
}
