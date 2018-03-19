import React, { Component } from 'react';
// import ProfileForm from './../ProfileCreator/ProfileForm'; // dont know if i need this
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBarterInfo, getBarterName, getUserId, getItemId, getBarterImg, getBarterData } from './../../ducks/ProfileCreatorReducer';

import SubmitBarterBtn from './SubmitBarterBtn';
import BarterImg from './BarterImg';
import BarterDisplay from './BarterDisplay';
import * as Colors from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './BarterCreator.css';

import RaisedButton from 'material-ui/RaisedButton';

class BarterCreator extends Component {
    render(){
    console.log(this.props);
    const { getBarterInfo, getBarterName, getBarterImg } = this.props;

    const style = {
        marginLeft: 50,
      };



    return (
        <div className="header">
       
            <h3 className="words">Post your barter here...</h3>
            
            
                <div className="input">
                <TextField style={style} hintText="Item for barter."
      floatingLabelText="name" onChange={ ( e ) => getBarterName( e.target.value ) } />
                <TextField style={style} hintText="Short description."
      floatingLabelText="description"  onChange={ ( e ) => getBarterInfo( e.target.value ) } />
                  </div>  

                  <div className="uploaders">
                <BarterImg />
               <SubmitBarterBtn />
                 </div>
            
            
         
            
        </div>
    
    )
 } 
}
function mapStateToProps( state ){
    return {
      
     form: state.form
    }
}

export default connect( mapStateToProps, { getBarterInfo, getBarterName, getBarterImg } )( BarterCreator );
