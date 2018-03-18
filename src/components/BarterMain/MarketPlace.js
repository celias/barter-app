import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBarterData } from './../../ducks/ProfileCreatorReducer';
import axios from 'axios';

// import './MarketPlace.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';


class MarketPlace extends Component {
    
    componentDidMount(){
      this.props.getBarterData();
  }
    

    render(){

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 500,
                height: 450,
              overflowY: 'auto',
            },
          };



    // console.log(this.props.form.barterData, "HERE")
    // let newBarterData = this.props.form.barterData.length > 0 && this.props.form.barterData.map((curr, i) => {
    //     console.log(curr, "IS IT OVER YET")

        const tilesData = this.props.form.barterData.length > 0 && this.props.form.barterData.map((curr, i) => {
    return (
        <div>
     
        <div style={styles.root}>
        <GridList
      cellHeight={'auto'} cols={1} padding={1}
      style={styles.gridList}
    >
    <GridTile>
        <div key={i}>
         <Link to={`/product/${curr.product_id}`}><img src={curr.img} /></Link>
            <p>{curr.product_name}</p>
            
            <p>{curr.description}</p>
            </div>
        </GridTile>
    </GridList>
  </div>
  
    </div>
  

    )
    })
        return(
        <div> 
            <MuiThemeProvider> 
  
             {tilesData}  
            </MuiThemeProvider> 
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