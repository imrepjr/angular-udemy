import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  condition = false;
  value = 0;

  toggleCondition() {
    this.condition = !this.condition;
  }
}
