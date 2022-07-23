import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CounterService {
    counter: number = 0;

    incrementCounter() {
        this.counter += 1;
    }

    getCounterValue(): number {
        return this.counter;
    }
}