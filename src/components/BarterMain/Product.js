import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';






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
                   <h1>PRODUCT</h1>
                   <img src={this.state.productData[0].img} />
                   <h1>{this.state.productData[0].description}</h1>
                   <h1>{this.state.productData[0].product_name}</h1>
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
