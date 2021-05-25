import React, { Component } from 'react';

class Counter extends Component {
   state = {
      counter: 1,
   };
   render() {
      return (
         <div>
            <span className={this.formattingColor()}>
               {this.formattingCounter()}
            </span>
            <button
               type="button"
               onClick={this.handleIncrement}
               className="btn btn-outline-dark btn-sm">
               Increment
            </button>
         </div>
      );
   }
   formattingCounter() {
      const { counter } = this.state;
      return counter === 0 ? 'Zero' : counter;
   }
   formattingColor() {
      let color = 'badge text-light m-2 badge-';
      color += this.state.counter === 0 ? 'warning' : 'dark';
      return color;
   }
   handleIncrement = () => {
      this.setState({ counter: this.state.counter + 1 });
   };
}

export default Counter;
