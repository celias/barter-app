import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBarterData } from './../../ducks/ProfileCreatorReducer';
import axios from 'axios';
import Header from './../Header/Header';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './MarketPlace.css';

class MarketPlace extends Component {
        
       componentDidMount(){
         this.props.getBarterData();
      }
        
    render(){
        // console.log(this.props)
        let newBarterData = this.props.form.barterData.length > 0 && this.props.form.barterData.map((curr, i) => {
        return (
            // console.log(this.props.barterData)
        <Card style={{width: '200px', margin: '20px'}}>
                <CardHeader
                    title={curr.nick_name}
                    subtitle={curr.location}
                    avatar={curr.profile_img}
                />
            <div key={i}>
            <Link to={`/product/${curr.product_id}`}><img style={{width: '200px'}} src={curr.img} /></Link>
            <CardTitle title={curr.product_name} subtitle={curr.description}/>
            </div>
        </Card>
        )
        }
    )
    return(
        <div className="barterContainer"> 
            <Header /> 
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