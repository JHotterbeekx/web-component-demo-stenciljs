import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css'
})
export class MyCounter {

  @Prop() start: number = 1;
  @Prop() step: number = 1;

  @Event() change: EventEmitter;
  
  @State() value: number;
  
  componentWillLoad() {
    this.value = this.start;
  }

  increase() {
    this.value = this.value + this.step;
    this.emitChange(this.value);
  }

  decrease() {
    this.value = this.value - this.step;
    this.emitChange(this.value);
  }

  emitChange(value: number) {
    console.log('changeEmitted', value);
    this.change.emit(value);
  }

  render() {
    return (
      <div>
        <div>
          {this.value}
        </div>
        <div>
          <button onClick={() => this.increase()}>
            +
          </button>
          <button onClick={() => this.decrease()}>
            -
          </button>
        </div>
      </div>
    );
  }
}