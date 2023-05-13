import { Component, Input, OnInit } from '@angular/core';
import { ServerElement } from '../models/ServerElement';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent {
  @Input() serverElement?: ServerElement;
}
