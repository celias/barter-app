import React, { Component } from 'react';
// import logo from './logo.svg';

// import './App.css';
import './Header.css';

import { Link } from 'react-router-dom';


class Header extends Component {
  render() {

    return (
    <div>
      <ul> 
    <li className="dropdown">
      <a href="javascript:void(0)" className="dropbtn">MENU</a>
      <div className="dropdown-content">
        <Link to="/">
          <a className="active">Home</a>
        </Link>

        <Link to="/profilecreator">
          <a>Update Profile</a>
        </Link>
      
        <Link to="/profileform">
          <a>Profile</a>
        </Link>
        <Link to="/barter">
        <a>Barter Something</a>
        </Link>

        <Link to="/marketplace">
        <a>Browse Barters</a>
        </Link>
      </div>
      </li>
    </ul> 
  </div>
    );
  }
}

export default Header;
