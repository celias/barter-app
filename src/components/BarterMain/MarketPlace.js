import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBarterData } from './../../ducks/ProfileCreatorReducer';
import axios from 'axios';



class MarketPlace extends Component {
    
    componentDidMount(){
      this.props.getBarterData();
  }
    

    render(){
    console.log(this.props)
    let newBarterData = this.props.form.barterData.length > 0 && this.props.form.barterData.map((curr, i) => {
        console.log(curr, "IS IT OVER YET")
    return (
        <div key={i}>
            <Link to={`/product/${curr.product_id}`}><img src={curr.img} /></Link>
            <p>{curr.product_name}</p>
            
            <p>{curr.description}</p>
        </div>

    )
    })
        return(
        <div>  
             {newBarterData}   
            </div>
        )
    }
 }

 function mapStateToProps( state ){
     return {
         form: state.form
     }
 }

 export default connect( mapStateToProps, { getBarterData })( MarketPlace );