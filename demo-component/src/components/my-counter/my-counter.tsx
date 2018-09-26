import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-counter',
  styleUrl: 'my-counter.css'
})
export class MyCounter {

  @Prop() start: number = 1;
  @Prop() step: number = 1;
  
  @State() value: number;
  
  componentWillLoad() {
    this.value = this.start;
  }

  increase() {
    this.value = this.value + this.step;
  }

  decrease() {
    this.value = this.value - this.step;
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