import React, { Component } from 'react';
import logo from './logo.svg';
import ImageUpload from './components/ImageUpload/ImageUpload';
import SubmitBtnHome from './components/SubmitBtn/SubmitBtnHome';
import './App.css';
import routes from './routes';

class App extends Component {
  
  render() {
    return (
      <div>
    { routes } 
      </div>
    );
  }
}
export default App;