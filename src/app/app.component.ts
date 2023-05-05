import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isVisible = false;
  clickLogs: Array<number> = [];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.clickLogs.push(Date.now());
  }
}
