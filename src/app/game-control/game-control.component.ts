import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnDestroy {
  intervalId: number | undefined;
  counter = 0;
  @Output('onTick') tickEvent = new EventEmitter<number>();
  @Output('onStart') startEvent = new EventEmitter();

  startGame() {
    this.startEvent.emit();
    this.intervalId = window.setInterval(() => {
      this.tickEvent.emit(++this.counter);
    }, 1000);
  }

  stopGame() {
    if (!this.intervalId) return;
    this.counter = 0;
    window.clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    this.intervalId && window.clearInterval(this.intervalId);
  }
}
