import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { getUserBarter } from './../../ducks/ProfileCreatorReducer';



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

      return(
          <div>
              <Link to="/marketplace"> 
                <button onClick={() => this.props.getUserBarter(barterInfo, 
                barterName, 
                userId, 
                itemId, 
                barterImg)}>Submit Barter</button>
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