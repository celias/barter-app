import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getCartData, getConfirmedData } from '../../ducks/ProfileCreatorReducer';

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

        const { barterItemName, 
            barterUserName, 
            purchaseDate, 
            tradedFor } = this.props;
   
        return (
            <div>
                <p> HERE IS STUFF IN YOUR CART </p>
                    <img src={this.state.cartData.length > 0 && this.state.cartData[0].img} />

                <button onClick={() => this.props.getConfirmedData(barterItemName,
                    barterUserName,
                    purchaseDate,
                    tradedFor)}>Confirm Barter</button>
               </div>
        )
    }
 }


 function mapStateToProps(state){
    return{
        state
    }
  }
    


 export default connect( mapStateToProps, { getCartData, getConfirmedData } )( Cart )