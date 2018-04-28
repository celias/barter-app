import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './../Header/Header';


class BarterDisplay extends Component {
  
    render(){
        console.log(this.props);

        return(
            <div>
                <Header />
                <img src={this.props.form.barterImg} />
                <h1>{this.props.form.barterName}</h1>
                <h1>{this.props.form.barterInfo}</h1>
                </div>
        )
    }
}

function mapStateToProps( state ){
    return {
        form: state.form
    }
}

export default connect( mapStateToProps )( BarterDisplay );