import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getCartData, createConfirmedData, getUserBarter } from '../../ducks/ProfileCreatorReducer';

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            cartData: {}
        }
    }

    componentDidMount(){
        axios.get("/api/getCartData").then(response => {
            console.log(response.data, "FUCKING CAART")
            this.setState({
                cartData: response.data
            })
        })
    }

    render(){
    console.log(this.state.cartData[0], "CART DATA")
        const { barterItemName, 
            barterUserName, 
            purchaseDate, 
            tradedFor, barterInfo, barterName, userId, barterImg, itemId } = this.props;
   console.log(barterItemName, 
    barterUserName, 
    purchaseDate, 
    tradedFor, barterInfo, barterName, userId, barterImg, itemId)
        return (
            <div>
                <p> HERE IS STUFF IN YOUR CART </p>
                    <img src={this.state.cartData.length > 0 && this.state.cartData[0].img} />

                <button onClick={() => this.props.createConfirmedData(this.state.cartData[0].product_name, 
            this.state.cartData[0].wants, this.state.cartData[0].product_id, this.state.cartData[0].user_id, this.state.cartData[0].description, this.state.cartData[0].img )}>Confirm Barter</button>
               </div>
        )
    }
 }


 function mapStateToProps(state){
    return{
        state
    }
  }
    


 export default connect( mapStateToProps, { getCartData, createConfirmedData, getUserBarter } )( Cart )