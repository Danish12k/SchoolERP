import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private readonly inFlight = new BehaviorSubject<number>(0);
  readonly loading$ = this.inFlight.pipe(map(count => count > 0));

  get isLoading() {
    return this.inFlight.value > 0;
  }

  start() {
    this.inFlight.next(this.inFlight.value + 1);
  }

  stop() {
    this.inFlight.next(Math.max(0, this.inFlight.value - 1));
  }
}

