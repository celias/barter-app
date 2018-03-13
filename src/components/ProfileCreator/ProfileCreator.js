import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } from './../../ducks/ProfileCreatorReducer.js';
import SubmitBtnHome from './../SubmitBtn/SubmitBtnHome';
import ProfileImg from './ProfileImg';

import '../../App.css';


class ProfileCreator extends Component {
    render(){
        console.log(this.props);
        const { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } = this.props;
        return (
            <div className="formContainer">
                <h1>Enter your profile information here...</h1>
                <ProfileImg />
                <input type="text" placeholder="name" onChange={ ( e ) => getDisplayName( e.target.value ) } />
                <input type="text" placeholder="about you" onChange={ ( e ) => getUserAbout( e.target.value ) } />
                <input type="text" placeholder="locale?" onChange={ ( e ) => getUserLocation( e.target.value ) } />
                <input type="text" placeholder="email" onChange={ ( e ) => getUserEmail( e.target.value ) } />
                <input type="text" placeholder="mediums" onChange={ ( e ) => getUserMediums( e.target.value ) } />
                <input type="img" placeholder="bartering" onChange={ ( e ) => getUserBarters( e.target.value ) } />
                <input type="text" placeholder="wanted materials" onChange={ ( e ) => getUserWants( e.target.value ) } />
                
                <SubmitBtnHome />
                
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        form: state.form
    };
}

export default connect( mapStateToProps, { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants } )( ProfileCreator );
