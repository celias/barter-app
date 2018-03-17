import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from './../../ducks/UserReducer';


import './Home.css';


class Home extends Component {
 
    render() {
     return (
       
       <div className="loginContainer">

       <div className="logo">
       <h1 className="barter">b<span className="arter">{`{art}`}</span>er</h1>
       
      <a href={process.env.REACT_APP_LOGIN}><button className="loginBtn">LOGIN or REGISTER</button></a>
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
