import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



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
            {this.state.favorite.length > 0 &&
            <div>
                <img src={this.state.favorite[0].img} />
               </div>
            }
        <MuiThemeProvider>
            <Paper style={style} zDepth={3}>
             <h1>{this.props.displayName}</h1>
                <br />
                    <p>{this.props.userAbout}</p>
                    <p>{this.props.userLocation}</p>
                    <p>{this.props.userEmail}</p>
                    <p>{this.props.userMediums}</p>
                    <p>{this.props.userWants}</p>
                    <img src={this.props.userImg} /> 
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