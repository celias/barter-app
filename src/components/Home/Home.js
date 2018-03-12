import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from './../../ducks/UserReducer';

import { LoginBtn, Pre } from './stylesHome';


class Home extends Component{
 // COMPONENT DID MOUNT WAS HERE
 
    render() {
     return (
       <div className="loginLanding">

       <h3>Start Here.</h3>
       
         <a className="login" href={process.env.REACT_APP_LOGIN}><LoginBtn>LOGIN or REGISTER</LoginBtn></a>
        
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
