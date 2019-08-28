import React, { Component } from "react";
import { NavLink, withRouter, Switch, Route } from "react-router-dom";
import './Navbar.css'
import Chart from './Chart';
import App from '../App';
import Form from './Form';

class NavBar extends Component {
  render() {
    return (
      <div className='Navbar'>
        <NavLink exact to='/' activeClassName='Navbar-active' >
          Home
        </NavLink>
        <NavLink exact to='/chart' activeClassName='Navbar-active' >
          Chart
        </NavLink>
      </div>
    );
  }
}
export default NavBar;
