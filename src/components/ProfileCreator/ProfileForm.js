import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Divider from 'material-ui/Divider';
import './ProfileForm.css';



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

        const style = {
            height: 800,
            width: 800,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };


        
        return(
            <div>
        <div>
        <MuiThemeProvider>
            <Paper style={style} zDepth={3}>
             <h1 className="words">{this.props.displayName}</h1>
             <Divider />
                    <p className="word">{this.props.userAbout}</p>
                    <Divider />
                    <p className="word">{this.props.userLocation}</p>
                    <Divider />
                    <p className="word">{this.props.userEmail}</p>
                    <Divider />
                    <p className="word">{this.props.userMediums}</p>
                    <Divider />
                    <p className="word">{this.props.userWants}</p>
                    <img className="pic" src={this.props.userImg} /> 
                </Paper>

            <Paper style={style} zDepth={3}>    
            {this.state.favorite.length > 0 &&
            <div>
                <img className="favImg" src={this.state.favorite[0].img} />
               </div>
            }
            </Paper>
        </MuiThemeProvider>
                    
                    
            </div>
            </div>
        )
    }
  }
  function mapStateToProps( state ){
      return state.form
  }

  export default connect( mapStateToProps )( ProfileForm );