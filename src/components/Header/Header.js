import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// import '../../App.css';
import '../Home/Home.css'

class Header extends Component {


  render() {

    return (
    <div>
      <ul className="navbar" > 
    
    <li className="navbar" style={{ listStyleType: 'none', whiteSpace: 'nowrap'}}>
        <Link to="/">
          <a>Home |</a>
        </Link>

        <Link to="/profilecreator">
          <a>Update Profile |</a>
        </Link>
      
        <Link to="/profileform">
          <a>Profile |</a>
        </Link>
        <Link to="/barter">
        <a>Barter Something |</a>
        </Link>

        <Link to="/marketplace">
        <a>Browse Barters |</a>
        </Link>

        <Link to="/cart">
        <a>Cart</a>
        </Link>
      
      </li>
    </ul> 
  </div>
    );
  }
}

export default Header;
