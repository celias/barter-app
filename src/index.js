import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
<MuiThemeProvider>
<Provider store={store}>
  <Router>
   <App />
  </Router>
</Provider>
</MuiThemeProvider>, 
document.getElementById('root'));

