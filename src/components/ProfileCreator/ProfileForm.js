import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileForm extends Component {
    render(){
        console.log(this.props);
        return(
            <div className="profileForm">
            <h1 className="displayName">{this.props.displayName}</h1>
            <br />
            <p>{this.props.userAbout}</p>
            <p>{this.props.userLocation}</p>
            <p>{this.props.userEmail}</p>
            <p>{this.props.userMediums}</p>
            <p>{this.props.userBarters}</p>
            <p>{this.props.userWants}</p>
            <p>{this.props.userImg}</p>
            
            </div>
        )
    }
  }
  function mapStateToProps( state ){
      return {
          displayName: state.displayName,
          userAbout: state.userAbout,
          userLocation: state.userLocation,
          userEmail: state.userEmail,
          userMediums: state.userMediums,
          userBarters: state.userBarters,
          userWants: state.userWants,
          userImg: state.userImg

      }
  }

  export default connect( mapStateToProps )( ProfileForm );