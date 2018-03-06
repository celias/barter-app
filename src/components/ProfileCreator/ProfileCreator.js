import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } from './../../ducks/ProfileCreatorReducer.js';
import SubmitBtnHome from './../SubmitBtn/SubmitBtnHome';
import ProfileImg from './ProfileImg';


class ProfileCreator extends Component {
    render(){
        console.log(this.props);
        const { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } = this.props;
        return (
            <div className="formContainer">
                <h1>Enter your profile information here...</h1>
                <ProfileImg />
                <input type="text" placeholder="Display Name" onChange={ ( e ) => getDisplayName( e.target.value ) } />
                <input type="text" placeholder="About You" onChange={ ( e ) => getUserAbout( e.target.value ) } />
                <input type="text" placeholder="Where are you from?" onChange={ ( e ) => getUserLocation( e.target.value ) } />
                <input type="text" placeholder="Email" onChange={ ( e ) => getUserEmail( e.target.value ) } />
                <input type="text" placeholder="What are your preferred mediums?" onChange={ ( e ) => getUserMediums( e.target.value ) } />
                <input type="text" placeholder="What are you bartering?" onChange={ ( e ) => getUserBarters( e.target.value ) } />
                <input type="text" placeholder="What materials are you looking for?" onChange={ ( e ) => getUserWants( e.target.value ) } />
                
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
