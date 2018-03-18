import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBarterData } from './../../ducks/ProfileCreatorReducer';
import axios from 'axios';


// import './MarketPlace.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import Paper from 'material-ui/Paper';



class MarketPlace extends Component {
    
    componentDidMount(){
        this.props.getBarterData();
    }
    state = {
        selectedIndex: 0,
    };
    
    select = (index) => this.setState({selectedIndex: index});
    
    
    
    render(){
  

        const iconStyles = {
            marginBottom: 24,
          };

          const style = {
            height: 800,
            width: 800,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };

        const styles = {
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            },
            gridList: {
              width: 500,
              height: 450,
            //   overflowY: 'auto',
            },
          };



    console.log(this.props.form.barterData, "HERE")
    let newBarterData = this.props.form.barterData.length > 0 && this.props.form.barterData.map((tile, i) => {
        console.log(tile, "IS IT OVER YET")
    return (
        <div>
        <Paper style={style} zDepth={1}>
          
          <div style={styles.root}>
        <GridList
      cellHeight={100} cols={'auto'} padding={1}
      style={styles.gridList}
    >
    
        <div>
  
        <GridTile key={tile.img} title={tile.product_name} subtitle={tile.description} actionIcon={<IconButton><StarBorder color="white" actionPosition="left"
        
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1} /></IconButton>}>
        <Link to={`/product/${tile.product_id}`}><img src={tile.img} /></Link>
        
        
        </GridTile>
            </div>
    </GridList>
  </div>
 
  
  
    </Paper>
    </div>
  

    )
    })
        return(
        <div> 
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