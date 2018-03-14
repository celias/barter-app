import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import './Product.css';

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
                   <p className="monospace">User: {this.state.productData[0].nick_name}</p>
                   <img className="profilePic" src={this.state.productData[0].img} />
                   <p className="monospace">Item for barter: {this.state.productData[0].product_name}</p>
                   <p className="monospace">Barter description: {this.state.productData[0].description}</p>
                   <p className="monospace">Will trade for: {this.state.productData[0].wants}</p>
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
export default Product;
