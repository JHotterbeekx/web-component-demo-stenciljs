import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-demo',
  styleUrl: 'my-demo.css'
})
export class MyDemo {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p>
        My name is {this.name}
      </p>
    );
  }
}