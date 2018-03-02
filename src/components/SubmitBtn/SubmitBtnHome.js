import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateUserProfile } from './../../ducks/ProfileCreatorReducer';


class SubmitBtnHome extends Component {
    constructor(){
        super();

    }
    
    render(){
        console.log(this.props)
        const { displayName,
            userAbout,
            userLocation,
            userEmail,
            userMediums,
            userBarters,
            userWants,
            userImg } = this.props;
        return(
            <div>
                <div>
                  
                    <Link to="/">
                        <button onClick={() => this.props.updateUserProfile(displayName,
            userAbout,
            userLocation,
            userEmail,
            userMediums,
            userBarters,
            userWants,
            userImg)}>Submit</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    console.log(state)
    return {
        displayName: state.form.displayName,
        userAbout: state.form.userAbout,
        userLocation: state.form.userLocation,
        userEmail: state.form.userEmail,
        userMediums: state.form.userMedium,
        userBarters: state.form.userBarters,
        userWants: state.form.userWants,
        userImg: state.form.userImg
    }
}

export default connect( mapStateToProps, {updateUserProfile} )(SubmitBtnHome);