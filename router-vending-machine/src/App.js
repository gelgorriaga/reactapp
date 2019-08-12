import React, {Component} from 'react';
import Chips from './Chips';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Soda from './Soda';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom'
import './App.css';

class  App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <VendingMachine />} />
          <Route exact path='/chips' render={() => <Chips />} />
          <Route exact path='/sardines' render={() => <Sardines />} />
          <Route exact path='/soda' render={() => <Soda />} />
        </Switch>

      </div>
    );
  }
}

 export default App;


