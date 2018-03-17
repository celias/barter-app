import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/ProfileCreatorReducer';
import { withRouter } from 'react-router-dom';

class UserProfile extends Component {
    componentDidMount(){
        this.props.getUser().then(response => {
            if(this.props.name) {
                console.log("hit if")
                this.props.history.push('/barter')
            } else {
                console.log("hit else")
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

const mapStateToProps = state => state.form;

export default withRouter(connect(mapStateToProps, { getUser })(UserProfile));


