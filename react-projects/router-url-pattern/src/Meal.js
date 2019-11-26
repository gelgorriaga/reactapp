import React, { Component } from 'react'

export class Meal extends Component {
    render() {
        const foodName = this.props.match.params.foodName;
        const foodUrl = `https://source.unsplash.com/400x200/?${foodName}`;

        const drinkName = this.props.match.params.drinkName;
        const drinkUrl = `https://source.unsplash.com/400x200/?${drinkName}`;
        return (
            <div>
                <h1>A meal of {foodName} + {drinkName} </h1>
                <img src={foodUrl} alt={foodName}  />
                <img src={drinkUrl} alt={drinkName}  />
            </div>
        );
    }
}

export default Meal
