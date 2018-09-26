import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-number-display',
})
export class MyNumberDisplay {

  @Prop() value: number = 0;

  render() {
    return (
      <div>
        {this.value}
      </div>
    );
  }
}