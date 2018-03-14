import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from './../../ducks/UserReducer';


import './Home.css';


class Home extends Component{
 // COMPONENT DID MOUNT WAS HERE
 
    render() {
     return (
       <div className="homeContainer">
       <div className="container">
       <h1>b<span>{`{art}`}</span>er</h1>
       </div>
         <div className="loginContainer">

       
       
         <a href={process.env.REACT_APP_LOGIN}><button className="loginBtn">LOGIN or REGISTER</button></a>
        
        {this.props.user ? (
        <div>
         <h1 className="no">{this.props.user.authid}</h1>
         <h1 className="no">{this.props.user.name}</h1>
        </div>
     ) : (
         <h1 className="no">{this.props.errMessage}</h1>
     )}
     </div>
     </div>
    );
  }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, { getUser })(Home));
