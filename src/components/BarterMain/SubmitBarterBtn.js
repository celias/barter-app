import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { getUserBarter } from './../../ducks/ProfileCreatorReducer';

import RaisedButton from 'material-ui/RaisedButton';

class SubmitBarterBtn extends Component {
    constructor(){
       super();
 }


    render() {
        console.log(this.props)
        const { barterInfo, 
                barterName, 
                userId, 
                itemId, 
                barterImg } = this.props;

                const bstyle = {
                    margin: 10,
                 };

      return(
          <div>
              <Link to="/marketplace"> 
                <RaisedButton label="Submit" secondary={true} style={bstyle} onClick={() => this.props.getUserBarter(barterInfo, 
                barterName, 
                userId, 
                itemId, 
                barterImg)} />
            </Link>
            </div>
      )
    }
 }
 
 function mapStateToProps( state ){
     console.log(state.barters)
     return {
        barterInfo: state.form.barterInfo, 
        barterName: state.form.barterName, 
        userId: state.form.userId, 
        itemId: state.form.itemId, 
        barterImg: state.form.barterImg
     }
 }

 export default connect( mapStateToProps, { getUserBarter } )(SubmitBarterBtn);