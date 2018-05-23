import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from './../Header/Header';
import { getCartData, createConfirmedData, getUserBarter } from '../../ducks/ProfileCreatorReducer';
import './Cart.css';
import swal from 'sweetalert';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            cartData: {},
          
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
        
        const purchased = this.state.purchaseConfirmed;

            return (
                <div>
                    <Header />
                <Card>
                    <CardHeader />
                <div>
                   
                <div>
                {this.state.cartData.length > 0 &&
                    <div className="cart">
                    <img src={this.state.cartData[0].img} />
                    <p>{this.state.cartData[0].product_name}</p>
                    <p>{this.state.cartData[0].wants}</p>
                    <p>{this.state.cartData[0].email}</p>
                </div>
                }
                </div>
               
                <FlatButton label="Confirm Barter" secondary={true} onClick={() => this.props.createConfirmedData(this.state.cartData[0].product_name, 
            this.state.cartData[0].wants, this.state.cartData[0].product_id, this.state.cartData[0].user_id, this.state.cartData[0].description, this.state.cartData[0].img )
            .then(swal("Barter confirmed! Trader will reach out to you shortly!"))} />
        </div>
            </Card>
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