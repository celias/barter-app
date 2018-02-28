

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/UserReducer';
import { withRouter } from 'react-router-dom';

class UserProfile extends Component {
    componentDidMount(){
        this.props.getUser().then(response => {
            if(this.props.user.name) {
                this.props.history.push('/barter')
            } else {
                this.props.history.push('/profilecreator')
            }
        })
    }
    render(){
        return(
            <div>
                
                </div>
        )
    }
}

const mapStateToProps = state => state.user;

export default withRouter(connect(mapStateToProps, { getUser })(UserProfile));


