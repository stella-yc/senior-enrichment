'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory} from 'react-router'

import store from './store';
import Root from './components/Root';
import AllCampuses from './components/AllCampuses';


render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AllCampuses} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
