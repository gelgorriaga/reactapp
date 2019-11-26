import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
    render() {
      
      return (
        <div className="container">
          <button className="buttons"
                  onClick={this.props.decreaseCount}>-</button>
          <span>{this.props.countValue}</span>
          <button className="buttons"
                  onClick={this.props.increaseCount}>+</button>
        </div>
      );
    }
  }
  export default Counter