import React, { Component } from 'react';

import { Link } from 'react-router-dom';



import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {

    const titleStyles = {
      title: {
        cursor: 'pointer'
    
      },
      color:{
        color: Colors.pink800

      }
    };

    return (
    <div>
      <MuiThemeProvider>
        
        <RaisedButton className="navbar" style={{width: '100%'}} title={<span style={titleStyles.title}>MENU</span>} titleStyle={titleStyles.color}
          label="MENU"
          onClick={this.handleToggle}
        />
        
        <Drawer open={this.state.open}>
        
        
        <MenuItem onClick={this.handleClose}><Link to="/">
          <a>LOGOUT</a>
        </Link></MenuItem>
           <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/profilecreator">
          <a>UPDATE PROFILE</a>
        </Link></MenuItem>
            <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/profileform">
          <a>PROFILE</a>
        </Link></MenuItem>
            <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/barter">
          <a>CREATE BARTER</a>
        </Link></MenuItem>
        <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/marketplace">
          <a>MARKETPLACE</a>
        </Link></MenuItem>
            <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/cart">
          <a>CART</a>
        </Link></MenuItem>
        
            </Drawer>
      </MuiThemeProvider>
      
  </div>
    );
  }
}

export default Header;
