import React, { Component } from 'react';
import './App.css';
import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FoodSearch />
        {/* <Route path='/' render={(routerProps) => <FoodSearch  {...routerProps} />} /> */}
        <Switch>
          <Route exact path='/food/:name' render={(routeProps) => <Food authenticated={true} {...routeProps} />} />
          <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
          <Route exact path='NotFound' render={() => <h1>ERROR NOT FOUND!!!!</h1>} />
        </Switch>
      </div>
    );
  }
}
export default App;
