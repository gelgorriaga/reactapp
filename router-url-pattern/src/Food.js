import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Food extends Component {
    render() {
        const name = this.props.match.params.name;
        const url = `https://source.unsplash.com/400x200/?${name}`;
        console.log(name, url);
        return (
            <div className='Food'>
                {/\d/.test(name)
                    ? <Redirect to="/NotFound" />
                    : (<div>
                        <h1>I love to eat {name} </h1>
                        <img src={url} alt={name} />
                    </div>)

                }
            </div>
        );
    }
}

export default Food

// isPalindrome = (str) =>{
// str = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
// return str === str.split('').reverse().join('');
// }