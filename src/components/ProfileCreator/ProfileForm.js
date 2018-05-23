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

    
    render() {
        // console.log(this.state.favorite);
        let newFav = this.state.favorite.length > 0 && this.state.favorite.map((curr, i) =>{
        console.log(this.state.favorite, "FAV HERE")

    


        
        return(
            
        
                <Card style={{width: '200px', margin: '20px'}}>
                   <CardHeader title={curr.nick_name} />
                <div key={i}>
                <img  style={{width: '200px'}} src={curr.img} />
                <CardTitle title={curr.product_name} subtitle={curr.description}/>
                </div>
                </Card>
        )
    }
)
    return (
        <div>
        <div className="profileCard" style={{width: '200px', margin: '20px'}}>
            <Card>
    
             <CardHeader
             title={this.props.displayName}
             subtitle={this.props.userLocation}
             avatar={this.props.userImg}/>

             <CardTitle style={{width: '200px', margin: '20px'}} title={this.props.displayName} subtitle={this.props.userAbout}/>
             <CardText>
                 Will trade for: {this.props.userWants}
                 <Divider /> 
                 Contact me: {this.props.userEmail}
                 </CardText>
                </Card>

          <div className="profileCard" style={{width: '200px', margin: '20px'}}>  
            {newFav}
          </div>

        </div>
        </div>
    )

}

}
function mapStateToProps( state ){
    return state.form
}

export default connect( mapStateToProps )( ProfileForm );