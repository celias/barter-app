import React, { Component } from 'react';
// import ProfileForm from './../ProfileCreator/ProfileForm'; // dont know if i need this
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBarterInfo, getBarterName, getUserId, getItemId, getBarterImg, getBarterData } from './../../ducks/ProfileCreatorReducer';

import SubmitBarterBtn from './SubmitBarterBtn';
import BarterImg from './BarterImg';
import BarterDisplay from './BarterDisplay';


class BarterCreator extends Component {
    render(){
    console.log(this.props);
    const { getBarterInfo, getBarterName, getBarterImg } = this.props;
    return (
        <div>
            <h1>You are at the barter page</h1>
            <p>Upload your barter image</p>
            <div className="imgUploader">
                    <BarterImg />
                <h1>Enter your barter info here...</h1>
                <input type="text" placeholder="item name" onChange={ ( e ) => getBarterName( e.target.value ) } />
                <input type="text" placeholder="item description" onChange={ ( e ) => getBarterInfo( e.target.value ) } />
                    
                 <SubmitBarterBtn />
            </div>
            
            <p>Here are your barters below</p>
                 
                 <BarterDisplay />
            
        </div>
    
    )
 } 
}
function mapStateToProps( state ){
    return {
     user: state.user,  
     form: state.form
    }
}

export default connect( mapStateToProps, { getBarterInfo, getBarterName, getBarterImg } )( BarterCreator );
