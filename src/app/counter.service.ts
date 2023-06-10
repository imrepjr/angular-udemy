import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementActiveToInactive() {
    this.activeToInactive += 1;
    console.log(
      'The new value for activeToInactive is: ',
      this.activeToInactive
    );
  }

  incrementInactiveToActive() {
    this.inactiveToActive += 1;
    console.log(
      'The new value for inactiveToActive is: ',
      this.inactiveToActive
    );
  }
}
