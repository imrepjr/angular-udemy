import { Component } from '@angular/core';
import { ServerElement } from './models/ServerElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  addServerElement(newServerElement: ServerElement) {
    console.log({ newServerElement, serverElements: this.serverElements });
    this.serverElements.push(newServerElement);
  }
}
