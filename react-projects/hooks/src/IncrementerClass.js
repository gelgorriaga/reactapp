import React, { Component } from 'react'

export class IncrementerClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        this.add = this.add.bind(this)
    }
    add(){
        this.setState({count: this.state.count + 1})
    }
    render() {
        return (
            <div>
                <h1>The count is: {this.state.count}</h1>
                <button onClick={this.add}>Add 1</button>
            </div>
        )
    }
}

export default IncrementerClass
