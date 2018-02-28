import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';

import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">bArter</h1>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
        
          <Header />
          
       
      </header>
        
        { routes }

        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
