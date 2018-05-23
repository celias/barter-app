import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserUpdate } from './../../ducks/ProfileCreatorReducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

class SubmitBtnHome extends Component {
    constructor(){
        super();
    }
    
    render(){
        // console.log(this.props)
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
        <MuiThemeProvider>
            <Link to="/">
            <FlatButton label="Submit" primary={true} onClick={() => this.props.getUserUpdate(displayName,
            userAbout,
            userLocation,
            userEmail,
            userMediums,
            userBarters,
            userWants,
            userImg)} />
                    </Link>
        </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ){
    console.log(state.user)
    return {
        displayName: state.form.displayName,
        userAbout: state.form.userAbout,
        userLocation: state.form.userLocation,
        userEmail: state.form.userEmail,
        userMediums: state.form.userMediums,
        userBarters: state.form.userBarters,
        userWants: state.form.userWants,
        userImg: state.form.userImg
    }
}

export default connect( mapStateToProps, { getUserUpdate } )(SubmitBtnHome);