import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class FoodSearch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             query: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleClick(){
        alert ('Saved your food to db!, searching now!');
        this.props.history.push(`/food/${this.state.query}`);
    }
    render() {
        return (
            <div>
                <h1>Search for a food</h1>

                <input 
                type ="text" 
                placeholder ="search for a food" 
                value={this.state.query} 
                name="query" 
                onChange={this.handleChange}
                />

                {/* <Link to={`/food/${this.state.query}`}>Go!</Link> */}

                <button onClick={this.handleClick}>search&save</button>
            </div>
        ); 
    }
}

export default withRouter(FoodSearch);
