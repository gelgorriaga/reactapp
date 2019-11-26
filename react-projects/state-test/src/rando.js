import React, { Component } from 'react'

class Rando extends Component {
    constructor (props){
        super (props);
        //this.handleClick = this.handleClick.bind(this);
        this.makeTimer();
    }
    state = {
        num: 0,
       clicked: false }

    makeTimer(){
            let rand = Math.floor(Math.random() * this.props.maxNum);
            this.setState({num: rand});
    }
    handleClick = (evt) => {
        this.setState ({clicked: !this.state.clicked});
        this.setState({num: this.state.num + 1});

    }
    render() {
        return (
        <div>
            <h1> {this.state.num}</h1>
            <h2>{this.state.clicked ? 'CLICKED!' : 'NOT CLICKED!'}</h2>
            <button onClick = {this.handleClick}>Click me!</button>
        </div>
        )
    }
}

export default Rando;