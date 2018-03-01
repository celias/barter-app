import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDisplayName } from './../../ducks/ProfileCreatorReducer.js';
//DONT FOR TO IMPORT ALL THE OTHER SHIT IN YOUR PROFILE CREATOR REDUCER

class ProfileCreator extends Component {
    render(){
        const { getDisplayName
         } = this.props;
        return (
            <div>
                <h1>Enter your profile information here...</h1>
                <input type="text" placeholder="Line One" onChange={ ( e ) => getDisplayName( e.target.value ) } />
                </div>
        )
    }
}

function mapStateToProps(state) {
    const { displayName } = state;
    return {
        displayName
    };
}

export default connect( mapStateToProps, { getDisplayName } )( ProfileCreator );
