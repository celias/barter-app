import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } from './../../ducks/ProfileCreatorReducer.js';
import SubmitBtnHome from './../SubmitBtn/SubmitBtnHome';
import ProfileImg from './ProfileImg';

import './ProfileCreator.css';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AutoComplete from 'material-ui/AutoComplete';





class ProfileCreator extends Component {
    
    
    render(){
        const artTypes = [
            'collage',
            'photography',
            'painting',
            'textile',
            'glass',
            'new media',
            'internet art',
            'ceramics',
            'music',
            'mixed media',
            'sound',
            'programming',
            'print making',
            'installation art',
            'found art',
            'illustration',
            'jewelry'
        ]

        const menuProps = {
            desktop: true,
            disableAutoFocus: true,
          };

        const style = {
          marginLeft: 50,
        };

        console.log(this.props);
        const { getDisplayName, getUserAbout, getUserLocation, getUserEmail, getUserMediums, getUserBarters, getUserWants, getUserImg } = this.props;
        
        
        return (

    <div>
  
  <MuiThemeProvider>
    
    <TextField style={style} onChange={ ( e ) => getDisplayName( e.target.value ) }
      hintText="Username"
      floatingLabelText="Username"
    /><br />
    <br />
    <TextField style={style} onChange={ ( e ) => getUserAbout( e.target.value ) }
        hintText="Tell others about yourself."
        floatingLabelText="Bio"
    /><br />
    <TextField style={style} onChange={ ( e ) => getUserLocation( e.target.value ) }
      hintText="Tell us where you're from!"
      floatingLabelText="Location"
    /><br />
    <TextField style={style} onChange={ ( e ) => getUserEmail( e.target.value ) }
      hintText="Let us contact you..."
      floatingLabelText="Email"
    /><br />
    <AutoComplete dataSource={artTypes}
          menuProps={this.handleUpdateInput}
    style={style} filter={AutoComplete.caseInsensitiveFilter} maxSearchResults={3} animated={true} onChange={ ( e ) => getUserMediums( e.target.value ) }
      hintText="Art forms you work in..."
      floatingLabelText="Mediums"
    />
    
    <br />
    <TextField style={style} onChange={ ( e ) => getUserBarters( e.target.value ) }
      hintText="Tell us what you have!"
      floatingLabelText="Bartering?"
      
    /><br />
    <TextField style={style} onChange={ ( e ) => getUserWants( e.target.value ) }
      hintText="Tell us what you want?"
      floatingLabelText="Your wants..."
    />
    <br />
    <Divider />
            <ProfileImg />

  </MuiThemeProvider>
                
    
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
