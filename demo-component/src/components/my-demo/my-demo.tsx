import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-demo',
  styleUrl: 'my-demo.css'
})
export class MyDemo {

  // Indicate that name should be a public property on the component
  @Prop() name: string;
  
  private counter = 0;

  render() {
    return (
      <p>
       The number is {this.counter} <br />
       <button onClick={() => this.counter++}>Increase</button>
      </p>
    );
  }
}