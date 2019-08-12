import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

const Dog = (props) => <h1> I am a dog {props.kind} of {props.age} Y/O</h1>; //functional component
const Contact = () => <h1> Dont contact us, ever</h1>; //functional component
const About = () => <h1>About us</h1>; //functional component
const DogHater = () => <h1> I hate dogs</h1>; //functional component


export class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className= "App-nav">
            <NavLink exact activeClassName="active-link" to='/'>about</NavLink>
            <NavLink exact activeClassName="active-link" to='/dog'>dog</NavLink>
            <NavLink exact activeClassName="active-link" to='/contact'>contact</NavLink>
            <NavLink exact activeClassName="active-link" to='/dog/hater'>dhater</NavLink>
        </nav>

        <Switch>
          <Route exact path='/' render={About} />
          <Route exact path='/dog' render={()=><Dog kind='caniche' age={10}/>} />
          <Route exact path='/dog/hater' render={DogHater} />
          <Route exact path='/contact' render={Contact} />
        </Switch>

      </div>
    );
  }
}

export default App
