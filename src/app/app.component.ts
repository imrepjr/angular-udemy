import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers: number[] = [];

  addNumber(number: number) {
    console.log('number added:', number);
    this.numbers.push(number);
  }

  resetNumbers() {
    this.numbers = [];
  }
}
