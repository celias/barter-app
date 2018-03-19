import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Divider from 'material-ui/Divider';
import './ProfileForm.css';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class ProfileForm extends Component {
    constructor(){
        super();

        this.state = {
            favorite: {}
        }
    }

    componentDidMount(){
        axios.get("/api/getFavs").then(response => {
            console.log(response.data.favorite, "FAVE")
            this.setState({
                favorite: response.data
            })
        })
    }



    render(){
        console.log(this.state.favorite, "FAV HERE")

    


        
        return(
            <Card>
        <div>
        
            
             <h1 className="words">{this.props.displayName}</h1>
             <Divider />
             <CardHeader>
                    <p className="word">{this.props.userAbout}</p>
                    
                    <p className="word">{this.props.userLocation}</p>
                    
                    <p className="word">{this.props.userEmail}</p>
                    
                    <p className="word">{this.props.userMediums}</p>
                    
                    <p className="word">{this.props.userWants}</p>

                    <img className="pic" src={this.props.userImg} /> 
                </CardHeader>
               

              
            {this.state.favorite.length > 0 &&
            <Card>
                <img className="favImg" src={this.state.favorite[0].img} />
               </Card>
            }
          
        
                    
                    
            </div>
            </Card>
        )
    }
  }
  function mapStateToProps( state ){
      return state.form
  }

  export default connect( mapStateToProps )( ProfileForm );