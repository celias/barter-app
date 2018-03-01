import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } from './../../ducks/ProfileCreatorReducer.js';
import SubmitBtnHome from './../SubmitBtn/SubmitBtnHome';
import ImageUpload from './../ImageUpload/ImageUpload';

class ProfileCreator extends Component {
    render(){
        const { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } = this.props;
        return (
            <div className="formContainer">
                <h1>Enter your profile information here...</h1>
                <ImageUpload />
                <input type="text" placeholder="Display Name" onChange={ ( e ) => getDisplayName( e.target.value ) } />
                <input type="text" placeholder="About You" onChange={ ( e ) => getUserAbout( e.target.value ) } />
                <input type="text" placeholder="Where are you from?" onChange={ ( e ) => getUserLocation( e.target.value ) } />
                <input type="text" placeholder="Email" onChange={ ( e ) => getUserEmail( e.target.value ) } />
                <input type="text" placeholder="What are your preferred mediums?" onChange={ ( e ) => getUserMediums( e.target.value ) } />
                <input type="text" placeholder="What are you bartering?" onChange={ ( e ) => getUserBarters( e.target.value ) } />
                <input type="text" placeholder="What materials are you looking for?" onChange={ ( e ) => getUserWants( e.target.value ) } />
                <input type="img" alt="userImg" placeholder="Upload your profile picture." onChange={ ( e ) => getUserImg( e.target.value ) } />
                <SubmitBtnHome />
           </div>
        )
    }
}

function mapStateToProps(state) {
    const { displayName, userAbout, userLocation, userEmail, userMediums, userBarters, userWants, userImg } = state;
    return {
        displayName, userAbout, userLocation, userEmail, userMediums, userBarters, userWants, userImg
    };
}

export default connect( mapStateToProps, { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } )( ProfileCreator );
