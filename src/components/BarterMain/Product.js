import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import axios from 'axios';

import './Product.css';

import { addToCart } from '../../ducks/ProfileCreatorReducer';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            productData: {}
        }
    }

    componentDidMount(){
      axios.get(`/api/getProductData/${this.props.match.params.id}`).then(response => {
          console.log(response.data)
          this.setState({
              productData: response.data
          })
        })
    }

    render(){
       let newProductData = this.state.productData.length > 0 && this.state.productData.map((curr, i) => {
           console.log(this.state, "STATE HERE")
           return(
               <div key={i}>
                   <div className="productContainer">
                   
                   <img src={this.state.productData[0].img} />
                   <p>User: {this.state.productData[0].nick_name}</p>
                   <img src={this.state.productData[0].profile_img} />
                   <p>Item for barter: {this.state.productData[0].product_name}</p>
                   <p>Barter description: {this.state.productData[0].description}</p>
                   <p>Will trade for: {this.state.productData[0].wants}</p>
                   
                   <button onClick={() => this.props.addToCart(this.state.productData[0]).then(this.props.history.push('/cart'))}>Add to cart</button>
                   </div>
                   </div>
           )
        })

        return (
            <div>
              
                {newProductData}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        state
    }
}
    


export default connect( mapStateToProps, { addToCart } )(Product)
