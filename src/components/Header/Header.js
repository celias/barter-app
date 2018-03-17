import React, { Component } from 'react';

import { Link } from 'react-router-dom';



import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {

    return (
    <div>
      <MuiThemeProvider>
        <AppBar
          label="MENU"
          onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
        
          <MenuItem onClick={this.handleClose}><Link to="/">
          <a>Home</a>
        </Link></MenuItem>
        <Divider />
          <MenuItem onClick={this.handleClose}><Link to="/profilecreator">
          <a>Update Profile</a>
        </Link></MenuItem>
        <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/profileform">
          <a>Profile</a>
        </Link></MenuItem>
        <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/barter">
          <a>Barter</a>
        </Link></MenuItem>
        <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/marketplace">
          <a>Collection</a>
        </Link></MenuItem>
        <Divider />
        <MenuItem onClick={this.handleClose}><Link to="/cart">
          <a>Cart</a>
        </Link></MenuItem>
        
        </Drawer>
      </MuiThemeProvider>
      
  </div>
    );
  }
}

export default Header;
