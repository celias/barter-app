import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header/Header';

import ImageUpload from './components/ImageUpload/ImageUpload';
import SubmitBtnHome from './components/SubmitBtn/SubmitBtnHome';


import './App.css';


import routes from './routes';

class App extends Component {
  
  render() {
    
    return (
      <div>
       
          <Header />
          
        
          {/* <h1>b<span>{`{art}`}</span>er</h1> */}

          
      
        { routes } 
      </div>
    );
  }
}

export default App;
