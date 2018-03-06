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
          <a className="active" href="#home">Home</a>
        </Link>

        <Link to="/profilecreator">
          <a href="#profilecreator">Update Profile</a>
        </Link>
      
        <Link to="/profileform">
          <a href="#profileform">My profile</a>
        </Link>
        <Link to="/barter">
        <a href="#barterpage">Barter</a>
        </Link>
      </div>
      </li>
    </ul> 
  </div>
    );
  }
}

export default Header;


{/* <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </li>
</ul>

<h3>Dropdown Menu inside a Navigation Bar</h3>
<p>Hover over the "Dropdown" link to see the dropdown menu.</p> */}