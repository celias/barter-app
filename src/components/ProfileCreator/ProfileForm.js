import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfileForm extends Component {
    render(){
        console.log(this.props);
        return(
            <div className="profileForm">
            <h1 className="displayName">{this.props.user.name}</h1>
            <br />
            <p>{this.props.user.bio}</p>
            <p>{this.props.user.location}</p>
            <p>{this.props.user.email}</p>
            <p>{this.props.user.mediums}</p>
            <p>{this.props.user.barters}</p>
            <p>{this.props.user.wants}</p>
            <p>{this.props.user.profile_img}</p>
            
            </div>
        )
    }
  }
  function mapStateToProps( state ){
      return {
          user: state.user.user,
          form: state.form

      }
  }

  export default connect( mapStateToProps )( ProfileForm );