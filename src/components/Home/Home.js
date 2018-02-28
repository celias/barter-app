import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUser } from './../../ducks/UserReducer';
// import { reducer } from './../../ducks/reducer'; // DO I NEED THIS?



class Home extends Component{
   componentDidMount() {
     this.props.getUser();
    }
    render() {
     return (
       <div>
         <a href={process.env.REACT_APP_LOGIN}><button>LOGIN</button></a>

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
