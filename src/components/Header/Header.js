import React, { Component } from 'react';
// import logo from './logo.svg';

// import './App.css';

import { Link } from 'react-router-dom';


class Header extends Component {
  render() {

    return (
      <div>
        
        <Link to="/">
          <p>Home</p>
        </Link>

        <button><Link to="/profilecreator">
          <p>Update Profile</p>
        </Link></button>

        <Link to="/profileform">
          <p>My profile</p>
        </Link>

        <Link to="/barter">
        <p>Barter</p>
        </Link>
        
      </div>
    );
  }
}

export default Header;