import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  public counter = signal(0);
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }

  decreaseBy(value: number) {
    if (this.counter() === 0) return;
    this.counter.update((current) => current - value);
  }
}
