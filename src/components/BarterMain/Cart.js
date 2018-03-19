import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getCartData, createConfirmedData, getUserBarter } from '../../ducks/ProfileCreatorReducer';


import swal from 'sweetalert';

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            cartData: {}
        }
    }

    componentDidMount(){
        axios.get("/api/getCartData").then(response => {
            console.log(response.data, "component DID mount CART!!!")
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
        
            
            
            
            //     console.log(barterItemName, 
            //     barterUserName, 
            //     purchaseDate, 
            //     tradedFor, barterInfo, barterName, userId, barterImg, itemId)
            return (
                <div>
                   
                <div>
                {this.state.cartData.length > 0 &&
                    
                    // <p> HERE IS STUFF IN YOUR CART </p>
                    <div>
                    <img src={this.state.cartData[0].img} />
                    <p>{this.state.cartData[0].product_name}</p>
                    <p>{this.state.cartData[0].wants}</p>
                    <p>{this.state.cartData[0].email}</p>


                </div>
                }
                </div>
                <button onClick={() => this.props.createConfirmedData(this.state.cartData[0].product_name, 
            this.state.cartData[0].wants, this.state.cartData[0].product_id, this.state.cartData[0].user_id, this.state.cartData[0].description, this.state.cartData[0].img )
            .then(swal("Barter confirmed! Lister of barter will reach out to you shortly! Happy trading!"))}>Confirm Barter</button>
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