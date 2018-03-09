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
                    <p>{this.props.userWants}</p>
                    <img src={this.props.userImg} /> 
                    
                    
            
            </div>
        )
    }
  }
  function mapStateToProps( state ){
      return state.form
  }

  export default connect( mapStateToProps )( ProfileForm );