import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './style/css/style.css';
// import './style/css/bootstrap.min.css';
// import './style/css/font-awesome.min.css';

import {DefaultLayout} from './components';
import Store from './common';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Switch>
            <DefaultLayout/>
          </Switch>
        </BrowserRouter>
      </Provider>  
    );
  }
}

export default App;
