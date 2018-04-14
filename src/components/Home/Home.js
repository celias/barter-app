import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from './../../ducks/UserReducer';
import RaisedButton from 'material-ui/RaisedButton';
import './../../assets/bart.jpg';

import './Home.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';


class Home extends Component {
  
  render() {

    const style = {
      margin: 5,
      
        buttonColor: Colors.deepOrangeA100

     
    };
    
    
    return (
      
      <div className="loginContainer">
    
       <div className="logo">
       <h1 className="barter">b<span className="arter">{`{art}`}</span>er</h1>
       
       
            <a href={process.env.REACT_APP_LOGIN}> <RaisedButton className="logo" label="LOGIN OR REGISTER" secondary={false} style={style} fullWidth={true} disabledBackgroundColor={true} backgroundColor={style.buttonColor}/></a>
      

        
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



