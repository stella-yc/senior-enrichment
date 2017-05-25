'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import store from './store';
import Root from './components/Root';
import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';
import App from './components/App';

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <Route path="campuses" component={AllCampuses} />
        <Route path="students" component={AllStudents} />
        <IndexRoute component={AllCampuses} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)



// render (
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <Route path="/" component={AllCampuses} />
//     </Router>
//   </Provider>,
//   document.getElementById('main')
// )
