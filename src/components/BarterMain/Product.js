import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './../Header/Header';

import axios from 'axios';

import './Product.css';

import { addToCart } from '../../ducks/ProfileCreatorReducer';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
    
    addToFav(id) {
       axios.post(`/api/addToFavorites/${id}`)
    }


    render(){
       let newProductData = this.state.productData.length > 0 && this.state.productData.map((curr, i) => {
           console.log(this.state, "STATE HERE")


           return(
            <Card style={{width: '800px'}}>
            <CardHeader
                    title={this.state.productData[0].product_name}
                    subtitle={this.state.productData[0].description}
                    avatar={curr.profile_img}
                />
               <div key={i}>
                   
                   
                   <img style={{width: '800px'}} src={this.state.productData[0].img} />
                   
    
                   
                   
                   <CardTitle title={this.state.productData[0].product_name} subtitle={this.state.productData[0].wants}/>

                   <FlatButton label="TRADE" primary={true} onClick={() => this.props.addToCart(this.state.productData[0]).then(this.props.history.push('/cart'))} />
                   <FlatButton label="FAVORITE" secondary={true} onClick={() => this.addToFav(this.state.productData[0].product_id)} />
                   
                

                   
                   </div>
                </Card>
           )
        })

        return (
            <div className="productContainer">
              <Header />
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
