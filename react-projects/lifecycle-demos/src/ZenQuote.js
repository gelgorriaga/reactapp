import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';
export class ZenQuote extends Component {
    state = {
        quote: "",
        isLoaded: false
    }

    componentDidMount() {
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(
                function () {
                    this.setState({ quote: response.data, isLoaded: true });

                }.bind(this),
                3000
            );
        });
    }


    

    render() {
        return (
            <div>
                {this.state.isLoaded
                    ? <div>
                        <h1>Always remember...</h1>
                        <p>{this.state.quote}</p>
                    </div>
                    : <div className="spinner"></div>
                }
            </div>

        )
    }
}

export default ZenQuote;
