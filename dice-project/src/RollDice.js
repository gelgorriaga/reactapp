import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props);
        this.state = { die1: "one", die2: "one", die3: "one", die4: "one", die5: "one", rolling: false, sumatoria: 0 };
        this.roll = this.roll.bind(this);
    }
    roll() {
        //pick 2 new rolls
        const newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie3 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie4 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie5 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        //set state with new rolls
        this.setState({ die1: newDie1, die2: newDie2, die3: newDie3, die4: newDie4, die5: newDie5, rolling: true });

        this.sumatoria();
        //wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }

    sumatoria = e =>{
        let sum = this.state.die1 + this.state.die2 +this.state.die3 + this.state.die4 + this.state.die5;
        this.setState( { sumatoria: sum}) ;
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                    <Die face={this.state.die3} rolling={this.state.rolling} />
                    <Die face={this.state.die4} rolling={this.state.rolling} />
                    <Die face={this.state.die5} rolling={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
                <h1>{`El total es de: ${this.state.sumatoria}`}</h1>
            </div>
        );
    }
}

export default RollDice;
