import React, { Component } from 'react';
import logo from './logo.svg';



import ImageUpload from './components/ImageUpload/ImageUpload';
import SubmitBtnHome from './components/SubmitBtn/SubmitBtnHome';
import Header from './components/Header/Header';

import './App.css';
// import './components/Home/Home.css';


import routes from './routes';

class App extends Component {
  
  render() {
    
    return (
      
      <div>
      <Header /> 
          
        { routes } 
      </div>
    );
  }
}

export default App;
