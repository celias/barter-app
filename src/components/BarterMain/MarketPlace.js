import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBarterData } from './../../ducks/ProfileCreatorReducer';
import axios from 'axios';


import './MarketPlace.css';




class MarketPlace extends Component {
        
       componentDidMount(){
         this.props.getBarterData();
      }
        
    
        render(){
        console.log(this.props)
        let newBarterData = this.props.form.barterData.length > 0 && this.props.form.barterData.map((curr, i) => {
        return (
            // console.log(this.props.barterData, "IS IT OVER YET")
            <div key={i}>
            <Link to={`/product/${curr.product_id}`}><img src={curr.img} /></Link>
                <p>{curr.product_name}</p>
                <p>{curr.description}</p>
                <p>{curr.wants}</p>
           </div>
    
        )
        })
            return(
            <div className="barterContainer">  
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