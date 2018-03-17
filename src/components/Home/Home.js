import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from './../../ducks/UserReducer';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './../Header/Header';

import './Home.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {
  
  render() {

    const style = {
      margin: 5,
    };
    
    
    return (
      
      <div className="loginContainer">
               <Header />
       <div className="logo">
       <h1 className="barter">b<span className="arter">{`{art}`}</span>er</h1>
       
       <MuiThemeProvider>
            <a href={process.env.REACT_APP_LOGIN}> <RaisedButton label="LOGIN OR REGISTER" secondary={true} style={style} fullWidth={true} /></a>
       </MuiThemeProvider>

        
       </div>
        
        {this.props.user ? (
        <div>
         <h1>{this.props.user.authid}</h1>
         <h1>{this.props.user.name}</h1>
        </div>
     ) : (
         <h1>{this.props.errMessage}</h1>
     )}
     </div>
    
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(Home));



