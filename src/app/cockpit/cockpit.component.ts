import { Component, EventEmitter, Output } from '@angular/core';
import { ServerElement } from '../models/ServerElement';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';

  @Output('onAddServerElement') newServerEvent =
    new EventEmitter<ServerElement>();

  private addElement(type: ServerElement['type']) {
    this.newServerEvent.emit(
      new ServerElement(type, this.newServerName, this.newServerContent)
    );
    this.newServerName = '';
    this.newServerContent = '';
  }

  onAddServer() {
    this.addElement('server');
  }

  onAddBlueprint() {
    this.addElement('blueprint');
  }
}
